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
whatsappRoutes.post('/configurar', async (req, res) => {
    try {
        const { empresaId, phoneNumberId, wabaId, accessToken, verifyToken } = req.body;

        if (!empresaId || !phoneNumberId || !wabaId || !accessToken) {
            return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        // Usa upsert: se já existir configuração para esta empresa, atualiza; senão, cria uma nova.
        const configSalva = await prisma.businessWhatsapp.upsert({
            where: { empresaId: Number(empresaId) },
            update: {
                phoneNumberId,
                wabaId,
                accessToken,
                verifyToken: verifyToken || 'minha_senha_secreta_123',
                status: 'ativo',
                updatedAt: new Date()
            },
            create: {
                empresaId: Number(empresaId),
                phoneNumberId,
                wabaId,
                accessToken,
                verifyToken: verifyToken || 'minha_senha_secreta_123',
                status: 'ativo'
            }
        });

        return res.status(200).json({
            sucesso: true,
            mensagem: 'Configurações do WhatsApp salvas com sucesso!',
            config: configSalva
        });

    } catch (error) {
        console.error('Erro ao salvar configurações do WhatsApp:', error);
        return res.status(500).json({ erro: 'Erro interno ao salvar configurações.' });
    }
});