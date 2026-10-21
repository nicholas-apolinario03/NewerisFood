"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estoqueRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../services/middleware");
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = require("../lib/prisma");
dotenv_1.default.config();
// Criamos um roteador em vez de uma nova aplicação Express
exports.estoqueRoutes = (0, express_1.Router)();
exports.estoqueRoutes.use(middleware_1.authMiddleware);
exports.estoqueRoutes.post('/cadastro', async (req, res) => {
    const empresaId = Number(req.empresaId);
    const { nome, unidadeMedida, quantidadeAtual, estoqueMinimo } = req.body;
    try {
        const insumoExistente = await prisma_1.prisma.insumo.findFirst({
            where: { empresaId, nome }
        });
        if (insumoExistente) {
            return res.status(400).json({ erro: 'Produto ja cadastrado no estoque' });
        }
        const novoInsumo = await prisma_1.prisma.insumo.create({
            data: {
                empresaId,
                nome,
                unidadeMedida,
                quantidadeAtual: quantidadeAtual ?? 0,
                estoqueMinimo: estoqueMinimo ?? 0
            }
        });
        return res.status(201).json({
            mensagem: 'Insumo cadastrado com sucesso!',
            insumo: novoInsumo
        });
    }
    catch (error) {
        console.error('Erro ao cadastrar insumo:', error);
        return res.status(500).json({ erro: 'Erro interno ao cadastrar insumo no estoque.' });
    }
});
exports.estoqueRoutes.get('/lista', async (req, res) => {
    const empresaId = Number(req.empresaId);
    try {
        const insumos = await prisma_1.prisma.insumo.findMany({
            where: { empresaId },
            orderBy: { nome: 'asc' }
        });
        return res.status(200).json(insumos);
    }
    catch (error) {
        console.error('Erro ao listar insumos:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar insumos.' });
    }
});
