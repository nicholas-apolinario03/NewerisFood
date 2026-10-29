import { Router } from 'express';
import dotenv from 'dotenv';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../services/middleware';

dotenv.config();


export const produtoRoutes = Router();
produtoRoutes.use(authMiddleware);

produtoRoutes.post('/cadastro', async (req, res) => {
    try {
        const empresaId = Number((req as any).empresaId);
        const { nome, descricao, precoBase, categoria, disponivel, maxFracoes, permiteFracionamento, ingredientes } = req.body;
        
        const produtoExistente = await prisma.produto.findFirst({ where: { empresaId, nome } });
        if (produtoExistente) {
            return res.status(400).json({ erro: "Produto já existente." });
        }

       const novoProduto = await prisma.produto.create({
            data: {
                empresaId,
                nome,
                descricao,
                precoBase: Number(precoBase ?? 0),
                categoria,
                disponivel: disponivel ?? true,
                maxFracoes: maxFracoes ? Number(maxFracoes) : 1,
                permiteFracionamento: permiteFracionamento ?? true,
                ingredientes: ingredientes && ingredientes.length > 0 ? {
                    create: ingredientes.map((item: any) => ({
                        insumoId: item.insumoId,
                        quantidadeGasta: item.quantidadeGasta
                    }))
                } : undefined
            },
            include: {
                ingredientes: {
                    include: { insumo: true }
                }
            }
        });

        return res.status(201).json({
            mensagem: 'Produto base cadastrado com sucesso!',
            produto: novoProduto
        });

    } catch (error) {
        console.error('Erro ao cadastrar produto base:', error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar produto.' });
    }
});

produtoRoutes.get('/lista', async (req, res) => {
    try {
        const empresaId = Number((req as any).empresaId);
        const produtos = await prisma.produto.findMany({
            where: { empresaId },
            include: {
                ingredientes: { include: { insumo: true } }
            }
        });
        return res.status(200).json(produtos);
    } catch (error) { 
        console.error('Erro ao listar produtos:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar produtos.' });
    }
});