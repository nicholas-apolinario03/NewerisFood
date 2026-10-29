import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function criarPedido(req: Request, res: Response) {
    try {
        const empresaId = (req as any).empresaId;
        const { cliente, pedido, observacoes, valorTotal } = req.body;

        if (!cliente || !cliente.telefone || !pedido || !Array.isArray(pedido) || pedido.length === 0) {
            return res.status(400).json({ error: "Dados incompletos para criação do pedido." });
        }

        const resultado = await prisma.$transaction(async (tx) => {
            
            // 1. Upsert do Cliente
            const clienteSalvo = await tx.cliente.upsert({
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

            // 2. Salva o Pedido na relação 'itens'
            const novoPedido = await tx.pedido.create({
                data: {
                    empresaId,
                    clienteId: clienteSalvo.id,
                    status: "espera",
                    observacoes,
                    valorTotal,
                    itens: {
                        create: pedido.map((item: any) => ({
                            produtoId: item.produtoId,
                            quantidade: item.quantidade,
                            precoCalculado: item.precoCalculado,
                            saboresFracoes: item.saboresFracoes ?? [],
                        }))
                    }
                },
                include: {
                    cliente: true,
                    itens: true,
                },
            });

            // 3. Baixa de Estoque Dupla (ProdutoInsumo + SaborInsumo)
            for (const item of pedido) {
                
                // A. Baixa nos Insumos Base do Produto (ex: caixa de pizza, massa)
                const receitasBase = await tx.produtoInsumo.findMany({
                    where: { produtoId: item.produtoId },
                });

                for (const receita of receitasBase) {
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

                // B. Baixa Proporcional nos Insumos dos Sabores (ex: recheios)
                if (item.saboresFracoes && Array.isArray(item.saboresFracoes)) {
                    for (const saborFracao of item.saboresFracoes) {
                        const insumosDoSabor = await tx.saborInsumo.findMany({
                            where: { saborId: saborFracao.saborId },
                        });

                        for (const saborInsumo of insumosDoSabor) {
                            // Calcula o gasto proporcional: (qtd da receita) * (fração 0.5) * (quantidade do item)
                            const gastoProporcional = saborInsumo.quantidadeGasta * (saborFracao.fracao || 1) * item.quantidade;

                            await tx.insumo.update({
                                where: { id: saborInsumo.insumoId },
                                data: {
                                    quantidadeAtual: {
                                        decrement: gastoProporcional,
                                    },
                                },
                            });
                        }
                    }
                }
            }

            return novoPedido;
        });

        return res.status(201).json(resultado);
    } catch (error: any) {
        console.error("Erro ao processar pedido:", error);
        return res.status(500).json({ error: "Erro interno ao cadastrar pedido e atualizar estoque." });
    }
}

export async function listarPedidos(req: Request, res: Response) {
    try {
        const empresaId = (req as any).empresaId;

        const pedidos = await prisma.pedido.findMany({
            where: { empresaId },
            include: {
                cliente: true,
                itens: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json(pedidos);
    } catch (error: any) {
        console.error("Erro ao listar pedidos:", error);
        return res.status(500).json({ error: "Erro interno ao buscar pedidos." });
    }
}

export async function atualizarStatusPedido(req: Request, res: Response) {
    try {
        const empresaId = (req as any).empresaId;
        const { id } = req.params;
        const { status } = req.body;

        const statusValidos = ['espera', 'preparando', 'saiu para entrega', 'concluido'];
        if (!statusValidos.includes(status)) {
            return res.status(400).json({ error: "Status inválido." });
        }

        const pedidoExiste = await prisma.pedido.findFirst({
            where: { id: Number(id), empresaId }
        });

        if (!pedidoExiste) {
            return res.status(404).json({ error: "Pedido não encontrado." });
        }

        const pedidoAtualizado = await prisma.pedido.update({
            where: { id: Number(id) },
            data: { status },
            include: { cliente: true, itens: true }
        });

        return res.status(200).json(pedidoAtualizado);
    } catch (error: any) {
        console.error("Erro ao atualizar status do pedido:", error);
        return res.status(500).json({ error: "Erro interno ao atualizar status." });
    }
}