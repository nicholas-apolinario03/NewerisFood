import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const whatsappConfigRoutes = Router();
const prisma = new PrismaClient();

// Rota para salvar ou atualizar as credenciais do WhatsApp de uma empresa
whatsappConfigRoutes.post('/configurar', async (req, res) => {
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