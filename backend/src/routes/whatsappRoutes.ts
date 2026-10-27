import { Router } from 'express';
import axios from 'axios';

export const whatsappRoutes = Router();

// Função auxiliar para enviar mensagens via API do WhatsApp
async function enviarMensagemWhatsApp(para: string, texto: string) {
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
    const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!WHATSAPP_TOKEN || !PHONE_NUMBER_ID) {
        console.error('ERRO: WHATSAPP_TOKEN ou WHATSAPP_PHONE_NUMBER_ID não configurados nas variáveis de ambiente.');
        return;
    }

    try {
        const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;

        const payload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: para,
            type: 'text',
            text: { body: texto }
        };

        const headers = {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
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

// 1. Verificação do Webhook (GET)
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

// 2. Recebimento de Mensagens e Resposta Automática (POST)
whatsappRoutes.post('/webhook', async (req, res) => {
    try {
        const body = req.body;

        if (body.object === 'whatsapp_business_account') {
            for (const entry of body.entry) {
                for (const change of entry.changes) {
                    const value = change.value;

                    // Filtra apenas mensagens ativas recebidas (ignora atualizações de status de leitura/entrega)
                    if (value && value.messages && value.messages.length > 0) {
                        const mensagemRecebida = value.messages[0];
                        const telefoneRemetente = mensagemRecebida.from;
                        const textoMensagem = mensagemRecebida.text?.body || '';

                        console.log(`Mensagem recebida de ${telefoneRemetente}: "${textoMensagem}"`);

                        // Envia a resposta automática para quem mandou a mensagem
                        await enviarMensagemWhatsApp(
                            telefoneRemetente,
                            `Olá! Bem-vindo à NewerisFood 🍕. Recebemos a tua mensagem: "${textoMensagem}". Em breve o cardápio estará disponível!`
                        );
                    }
                }
            }
            return res.status(200).send('EVENT_RECEIVED');
        }

        return res.sendStatus(404);
    } catch (error) {
        console.error('Erro ao processar webhook do WhatsApp:', error);
        return res.status(500).json({ erro: 'Erro interno no webhook.' });
    }
});