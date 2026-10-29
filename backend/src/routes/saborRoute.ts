import { Router } from 'express';
import dotenv from 'dotenv';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../services/middleware';

dotenv.config();

export const saborRoutes = Router();
saborRoutes.use(authMiddleware);

saborRoutes.post('/cadastro', async (req, res) => {
    try {
        const empresaId = Number((req as any).empresaId);
        const { nome, preco, disponivel, ingredientes } = req.body;

        const saborExistente = await prisma.sabor.findFirst({ where: { empresaId, nome } });
        if (saborExistente) {
            return res.status(400).json({ erro: "Sabor já cadastrado." });
        }

        const novoSabor = await prisma.sabor.create({
            data: {
                empresaId,
                nome,
                preco: Number(preco),
                disponivel: disponivel ?? true,
                // Ficha técnica do recheio do sabor
                insumosSabor: ingredientes && ingredientes.length > 0 ? {
                    create: ingredientes.map((item: any) => ({
                        insumoId: item.insumoId,
                        quantidadeGasta: item.quantidadeGasta
                    }))
                } : undefined
            },
            include: {
                insumosSabor: {
                    include: { insumo: true }
                }
            }
        });

        return res.status(201).json({
            mensagem: 'Sabor cadastrado com sucesso!',
            sabor: novoSabor
        });

    } catch (error) {
        console.error('Erro ao cadastrar sabor:', error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar sabor.' });
    }
});

saborRoutes.get('/lista', async (req, res) => {
    try {
        const empresaId = Number((req as any).empresaId);
        const sabores = await prisma.sabor.findMany({
            where: { empresaId },
            include: {
                insumosSabor: { include: { insumo: true } }
            }
        });
        return res.status(200).json(sabores);
    } catch (error) {
        console.error('Erro ao listar sabores:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar sabores.' });
    }
});