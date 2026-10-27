import axios from 'axios';

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN; // Token da Meta
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID; // ID do número no painel

export async function enviarMensagemWhatsApp(para: string, texto: string) {
    try {
        const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;
        
        const payload = {
            messaging_product: 'whatsapp',
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
    } catch (error) {
        console.error('Erro ao enviar mensagem pelo WhatsApp:', error);
    }
}