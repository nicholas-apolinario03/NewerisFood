"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoRoutes = void 0;
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = require("../lib/prisma");
const middleware_1 = require("../services/middleware");
dotenv_1.default.config();
exports.produtoRoutes = (0, express_1.Router)();
exports.produtoRoutes.use(middleware_1.authMiddleware);
exports.produtoRoutes.post('/cadastro', async (req, res) => {
    try {
        const empresaId = Number(req.empresaId);
        const { nome, descricao, preco, categoria, disponivel, ingredientes } = req.body;
        const produtoExistente = await prisma_1.prisma.produto.findFirst({ where: { empresaId, nome } });
        if (produtoExistente) {
            return res.status(400).json({ erro: "produto existente" });
        }
        const novoProduto = await prisma_1.prisma.produto.create({
            data: {
                empresaId,
                nome,
                descricao,
                preco: Number(preco),
                categoria,
                disponivel: disponivel ?? true,
                //ligação entre a tabela Produto e tabela ProdutoInsumo
                ingredientes: ingredientes && ingredientes.length > 0 ? {
                    create: ingredientes.map((item) => ({
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
            mensagem: 'Item cadastrado no cardápio com sucesso!',
            produto: novoProduto
        });
    }
    catch (error) {
        console.error('Erro ao cadastrar item no cardápio:', error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar item.' });
    }
});
exports.produtoRoutes.get('/lista', async (req, res) => {
    try {
        const empresaId = Number(req.empresaId);
        const produto = await prisma_1.prisma.produto.findMany({
            where: { empresaId }
        });
        return res.status(200).json(produto);
    }
    catch (error) {
        console.error('Erro ao listar produtos:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar produtos.' });
    }
});
