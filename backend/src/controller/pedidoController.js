"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarPedido = criarPedido;
exports.listarPedidos = listarPedidos;
exports.atualizarStatusPedido = atualizarStatusPedido;
const prisma_1 = require("../lib/prisma"); // Instância centralizada do PrismaClient
async function criarPedido(req, res) {
    try {
        const empresaId = req.empresaId; // Obtido através do middleware de autenticação (JWT)
        const { cliente, pedido, observacoes, valorTotal } = req.body;
        if (!cliente || !cliente.telefone || !pedido || !Array.isArray(pedido) || pedido.length === 0) {
            return res.status(400).json({ error: "Dados incompletos para criação do pedido." });
        }
        // Executamos as operações dentro de uma transação atômica do Prisma
        const resultado = await prisma_1.prisma.$transaction(async (tx) => {
            // 1. Upsert do Cliente
            const clienteSalvo = await prisma_1.prisma.cliente.upsert({
                where: {
                    empresaId_telefone: {
                        empresaId,
                        telefone: cliente.telefone,
                    },
                },
                update: {
                    nome: cliente.nome,
                    endereco: cliente.endereco,
                },
                create: {
                    empresaId,
                    telefone: cliente.telefone,
                    nome: cliente.nome,
                    endereco: cliente.endereco,
                },
            });
            // 2. Salva o Pedido
            const novoPedido = await prisma_1.prisma.pedido.create({
                data: {
                    empresaId,
                    clienteId: clienteSalvo.id,
                    status: "espera",
                    pedido: pedido, // Armazena o array JSON de itens
                    observacoes,
                    valorTotal,
                },
                include: {
                    cliente: true, // Já traz os dados do cliente no retorno
                },
            });
            // 3. Baixa de Estoque (Ficha Técnica / ProdutoInsumo)
            for (const item of pedido) {
                // Busca a receita do produto
                const receitas = await tx.produtoInsumo.findMany({
                    where: { produtoId: item.produtoId },
                });
                // Para cada ingrediente vinculado ao produto, desconta do estoque
                for (const receita of receitas) {
                    const quantidadeTotalGasta = receita.quantidadeGasta * item.quantidade;
                    await tx.insumo.update({
                        where: { id: receita.insumoId },
                        data: {
                            quantidadeAtual: {
                                decrement: quantidadeTotalGasta,
                            },
                        },
                    });
                }
            }
            return novoPedido;
        });
        return res.status(201).json(resultado);
    }
    catch (error) {
        console.error("Erro ao processar pedido:", error);
        return res.status(500).json({ error: "Erro interno ao cadastrar pedido e atualizar estoque." });
    }
}
async function listarPedidos(req, res) {
    try {
        const empresaId = req.empresaId; // Obtido do authMiddleware
        const pedidos = await prisma_1.prisma.pedido.findMany({
            where: { empresaId },
            include: {
                cliente: true, // Traz os dados do cliente relacionado
            },
            orderBy: {
                criadoEm: "desc", // Mostra os pedidos mais recentes primeiro
            },
        });
        return res.status(200).json(pedidos);
    }
    catch (error) {
        console.error("Erro ao listar pedidos:", error);
        return res.status(500).json({ error: "Erro interno ao buscar pedidos." });
    }
}
async function atualizarStatusPedido(req, res) {
    try {
        const empresaId = req.empresaId;
        const { id } = req.params;
        const { status } = req.body;
        // Validação básica do status permitido
        const statusValidos = ['espera', 'preparando', 'saiu para entrega', 'concluido'];
        if (!statusValidos.includes(status)) {
            return res.status(400).json({ error: "Status inválido." });
        }
        // Garante que o pedido pertence à empresa autenticada
        const pedidoExiste = await prisma_1.prisma.pedido.findFirst({
            where: { id: Number(id), empresaId }
        });
        if (!pedidoExiste) {
            return res.status(404).json({ error: "Pedido não encontrado." });
        }
        const pedidoAtualizado = await prisma_1.prisma.pedido.update({
            where: { id: Number(id) },
            data: { status },
            include: { cliente: true }
        });
        return res.status(200).json(pedidoAtualizado);
    }
    catch (error) {
        console.error("Erro ao atualizar status do pedido:", error);
        return res.status(500).json({ error: "Erro interno ao atualizar status." });
    }
}
