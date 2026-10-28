import { Router } from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

export const whatsappRoutes = Router();
const prisma = new PrismaClient();

// Função auxiliar para enviar mensagens usando as credenciais da empresa específica
async function enviarMensagemWhatsApp(phoneNumberId: string, accessToken: string, para: string, texto: string) {
    try {
        const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;

        const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: para,
            type: 'text',
            text: { body: texto }
        };

        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };

        await axios.post(url, payload, { headers });
        console.log(`Mensagem enviada com sucesso para ${para}`);
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Erro na resposta da Meta:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Erro ao enviar mensagem pelo WhatsApp:', error);
        }
    }
}

// 0. Endpoint para receber o código do Embedded Signup e conectar a empresa
whatsappRoutes.post('/conectar', async (req, res) => {
    const { code, empresaId } = req.body;

    if (!code || !empresaId) {
        return res.status(400).json({ 
            sucesso: false, 
            erro: 'Código de autorização (code) e ID da empresa são obrigatórios.' 
        });
    }

    try {
        const appId = process.env.META_APP_ID || '1844166906998944';
        const appSecret = process.env.META_APP_SECRET;

        // 1. Troca o código temporário por um User Access Token de longa duração na Meta
        // 1. Troca o código temporário por um User Access Token de longa duração na Meta
        const tokenResponse = await axios.get(`https://graph.facebook.com/v20.0/oauth/access_token`, {
            params: {
                client_id: appId,
                client_secret: appSecret,
                code: code,
                redirect_uri: '' // Certifica-te de que esta URL está exatamente igual à cadastrada no painel da Meta em "URIs de redirecionamento do OAuth válidos"
            }
        
        });

        const accessToken = tokenResponse.data.access_token;

        if (!accessToken) {
            return res.status(400).json({ sucesso: false, erro: 'Não foi possível obter o token de acesso da Meta.' });
        }

        // 2. Obtém os ativos partilhados (WABA ID e Phone Number ID) associados a este token
        // Através do endpoint debug_token ou consultando as contas do WhatsApp do utilizador
        const debugResponse = await axios.get(`https://graph.facebook.com/v20.0/debug_token`, {
            params: {
                input_token: accessToken,
                access_token: `${appId}|${appSecret}`
            }
        });

        // O granter_asset_id ou waba ID pode vir aqui, mas para garantir o WABA e Phone ID exatos do Embedded Signup:
        // Buscamos as contas de WhatsApp Business associadas ao utilizador
        const wabaResponse = await axios.get(`https://graph.facebook.com/v20.0/me/whatsapp_business_accounts`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const wabaId = wabaResponse.data?.data?.[0]?.id;

        if (!wabaId) {
            return res.status(400).json({ sucesso: false, erro: 'Nenhuma conta WABA encontrada para este utilizador.' });
        }

        // 3. Busca o Phone Number ID associado a este WABA
        const phonesResponse = await axios.get(`https://graph.facebook.com/v20.0/${wabaId}/phone_numbers`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const phoneNumberId = phonesResponse.data?.data?.[0]?.id;

        if (!phoneNumberId) {
            return res.status(400).json({ sucesso: false, erro: 'Nenhum número de telefone do WhatsApp encontrado nesta WABA.' });
        }

        // 4. Salva ou atualiza na base de dados Neon via Prisma
        const registro = await prisma.businessWhatsapp.upsert({
            where: { empresaId: Number(empresaId) },
            update: {
                accessToken: accessToken,
                wabaId: wabaId,
                phoneNumberId: phoneNumberId,
                status: 'CONECTADO',
                updatedAt: new Date(),
            },
            create: {
                empresaId: Number(empresaId),
                accessToken: accessToken,
                wabaId: wabaId,
                phoneNumberId: phoneNumberId,
                status: 'CONECTADO',
            },
        });

        return res.status(200).json({
            sucesso: true,
            mensagem: 'WhatsApp conectado e guardado com sucesso!',
            dados: registro
        });

    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Erro na Meta API ao conectar:', JSON.stringify(error.response.data, null, 2));
            return res.status(400).json({ sucesso: false, erro: error.response.data.error?.message || 'Erro na API da Meta.' });
        }
        console.error('Erro interno ao processar conexão WhatsApp:', error);
        return res.status(500).json({ sucesso: false, erro: 'Erro interno no servidor ao conectar o WhatsApp.' });
    }
});

// 1. Verificação do Webhook (GET) - Mantém-se genérica ou validada por token padrão
whatsappRoutes.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'minha_senha_secreta_123';

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('Webhook do WhatsApp verificado com sucesso!');
            return res.status(200).send(challenge);
        } else {
            return res.sendStatus(403);
        }
    }
    return res.sendStatus(400);
});

// 2. Recebimento de Mensagens Multi-Tenant (POST)
whatsappRoutes.post('/webhook', async (req, res) => {
    try {
        const body = req.body;

        if (body.object === 'whatsapp_business_account') {
            for (const entry of body.entry) {
                for (const change of entry.changes) {
                    const value = change.value;
                    const metadata = value.metadata; // Contém o phone_number_id de destino

                    if (metadata && metadata.phone_number_id) {
                        const targetPhoneNumberId = metadata.phone_number_id;

                        // BUSCA DINÂMICA NO NEON VIA PRISMA: Descobre qual empresa é dona deste número
                        const configWhatsapp = await prisma.businessWhatsapp.findUnique({
                            where: { phoneNumberId: targetPhoneNumberId }
                        });

                        if (!configWhatsapp) {
                            console.warn(`Nenhuma empresa encontrada para o Phone Number ID: ${targetPhoneNumberId}`);
                            continue;
                        }

                        // Se a mensagem for de utilizador (não apenas status de entrega)
                        if (value && value.messages && value.messages.length > 0) {
                            const mensagemRecebida = value.messages[0];
                            const telefoneRemetente = mensagemRecebida.from;
                            const textoMensagem = mensagemRecebida.text?.body || '';

                            console.log(`[Empresa ID: ${configWhatsapp.empresaId}] Mensagem de ${telefoneRemetente}: "${textoMensagem}"`);

                            // Responde utilizando o token e ID específicos desta empresa
                            await enviarMensagemWhatsApp(
                                configWhatsapp.phoneNumberId,
                                configWhatsapp.accessToken,
                                telefoneRemetente,
                                `Olá! Bem-vindo à NewerisFood 🍕. Recebemos a tua mensagem: "${textoMensagem}".`
                            );
                        }
                    }
                }
            }
            return res.status(200).send('EVENT_RECEIVED');
        }

        return res.sendStatus(404);
    } catch (error) {
        console.error('Erro ao processar webhook multi-tenant do WhatsApp:', error);
        return res.status(500).json({ erro: 'Erro interno no webhook.' });
    }
});