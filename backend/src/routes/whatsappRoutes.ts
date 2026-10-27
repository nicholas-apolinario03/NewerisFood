import { Router } from 'express';
import { enviarMensagemWhatsApp } from '../services/whatsappService';

export const whatsappRoutes = Router();

// 1. Verificação do Webhook (O Meta faz um GET para validar a URL)
whatsappRoutes.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'seu_token_de_verificacao_seguro';

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

// 2. Recebimento de Mensagens (O Meta faz um POST sempre que chega mensagem)
whatsappRoutes.post('/webhook', async (req, res) => {
    try {
        const body = req.body;

        // Verifica se é um evento válido do WhatsApp Business Account
        if (body.object === 'whatsapp_business_account') {
            for (const entry of body.entry) {
                for (const change of entry.changes) {
                    const value = change.value;

                    // Verifica se existem mensagens recebidas
                    if (value && value.messages && value.messages.length > 0) {
                        const mensagemRecebida = value.messages[0];
                        const telefoneRemetente = mensagemRecebida.from;
                        const textoMensagem = mensagemRecebida.text?.body;

                        console.log(`Mensagem de ${telefoneRemetente}: "${textoMensagem}"`);

                        // Exemplo de resposta automática simples
                        await enviarMensagemWhatsApp(
                            telefoneRemetente,
                            `Olá! Bem-vindo à NewerisFood 🍕. Recebemos a tua mensagem: "${textoMensagem}". Em breve o nosso cardápio estará disponível aqui!`
                        );
                        // Aqui no futuro vais colocar a lógica para responder o cliente (ex: cardápio, status do pedido)
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