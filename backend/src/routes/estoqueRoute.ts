import { Router } from 'express';
import { authMiddleware } from '../services/middleware'
import dotenv from 'dotenv';
import { prisma } from '../lib/prisma';

dotenv.config();

// Criamos um roteador em vez de uma nova aplicação Express
export const estoqueRoutes = Router();
estoqueRoutes.use(authMiddleware);


estoqueRoutes.post('/cadastro', async (req, res) => {
    const empresaId = Number((req as any).empresaId);

    const { nome, unidadeMedida, quantidadeAtual, estoqueMinimo } = req.body;
    try {
        const insumoExistente = await prisma.insumo.findFirst({
            where: { empresaId, nome }
        })
        if (insumoExistente) {
            return res.status(400).json({ erro: 'Produto ja cadastrado no estoque' });
        }
        const novoInsumo = await prisma.insumo.create({
            data: {
                empresaId,
                nome,
                unidadeMedida,
                quantidadeAtual: quantidadeAtual ?? 0,
                estoqueMinimo: estoqueMinimo ?? 0
            }
        })
        return res.status(201).json({
            mensagem: 'Insumo cadastrado com sucesso!',
            insumo: novoInsumo
        });
    } catch (error) {
        console.error('Erro ao cadastrar insumo:', error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar insumo no estoque.' });
    }


})
estoqueRoutes.get('/lista', async (req, res) => {
    const empresaId = Number((req as any).empresaId);
    try {
        const insumos = await prisma.insumo.findMany({
            where: { empresaId },
            orderBy: { nome: 'asc' }
        })
        return res.status(200).json(insumos)
    } catch (error) {
        console.error('Erro ao listar insumos:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar insumos.' });
    }

})
estoqueRoutes.delete("/:id",  async (req, res)=>{
    try {
        const empresaId = (req as any).empresaId;
        const { id } = req.params;

        // 1. Verifica se o insumo existe e pertence à empresa autenticada
        const insumoExiste = await prisma.insumo.findFirst({
            where: { 
                id: Number(id),
                empresaId 
            }
        });

        if (!insumoExiste) {
            return res.status(404).json({ error: "Insumo não encontrado ou não pertence à sua empresa." });
        }

        // 2. Limpa os vínculos de ficha técnica e apaga o insumo em uma transação
        await prisma.$transaction(async (tx) => {
            // Remove os vínculos da ficha técnica dos produtos
            await tx.produtoInsumo.deleteMany({
                where: { insumoId: Number(id) }
            });

            // Remove os vínculos da ficha técnica dos sabores
            await tx.saborInsumo.deleteMany({
                where: { insumoId: Number(id) }
            });

            // Elimina o insumo do estoque
            await tx.insumo.delete({
                where: { id: Number(id) }
            });
        });

        return res.status(200).json({ message: "Insumo excluído com sucesso do estoque." });
    } catch (error: any) {
        console.error("Erro ao excluir insumo do estoque:", error);
        return res.status(500).json({ error: "Erro interno ao excluir insumo do estoque." });
    }
});

