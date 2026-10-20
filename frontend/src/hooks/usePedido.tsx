import { useState, useEffect, useCallback } from "react";
import { pedidoService } from "../services/pedidoService";
import type { Pedido, NovoPedidoDTO } from "../types/pedido";

export function usePedidos() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const carregarPedidos = useCallback(async () => {
        setCarregando(true);
        setErro(null);
        try {
            const dados = await pedidoService.listar();
            setPedidos(dados);
        } catch (err: any) {
            setErro(err.message || 'Erro inesperado ao carregar pedidos.');
        } finally {
            setCarregando(false);
        }
    }, []);
    async function criarPedido(dados: NovoPedidoDTO): Promise<boolean> {
        setCarregando(true);
        setErro(null);
        try {
            const novoPedido = await pedidoService.criar(dados);
            // Adiciona o pedido recém-criado no topo da lista local
            setPedidos(prev => [novoPedido, ...prev]);
            return true;
        } catch (err: any) {
            setErro(err.message || 'Erro ao criar o pedido.');
            return false;
        } finally {
            setCarregando(false);
        }
    }
    async function alterarStatusPedido(id: number, novoStatus: string): Promise<boolean> {
        setErro(null);
        try {
            const pedidoAtualizado = await pedidoService.atualizar(id, novoStatus);
            // Atualiza a lista na tela sem precisar recarregar tudo do servidor
            setPedidos(prev => prev.map(p => p.id === id ? pedidoAtualizado : p));
            return true;
        } catch (err: any) {
            setErro(err.message || 'Erro ao atualizar o status do pedido.');
            return false;
        }
    }
    

    useEffect(() => {
        carregarPedidos();
    }, [carregarPedidos]);

    return {
        pedidos,
        carregando,
        erro,
        criarPedido,
        alterarStatusPedido, 
        recarregar: carregarPedidos
    };
}