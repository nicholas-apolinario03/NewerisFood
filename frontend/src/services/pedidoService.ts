import { api } from "./api";
import type { Pedido, NovoPedidoDTO } from "../types/pedido";

export const pedidoService = {
    listar: async (): Promise<Pedido[]> => {
        try {
            const resposta = await api.get('/empresa/pedido/lista');
            return resposta.data;
        } catch (error) {
            console.error("Erro ao listar os pedidos", error);
            throw error;
        }
    },

    criar: async (dados: NovoPedidoDTO): Promise<Pedido> => {
        try {
            const resposta = await api.post('/empresa/pedido/cadastro', dados);
            return resposta.data;
        } catch (error) {
            console.error("Erro ao cadastrar pedido", error);
            throw error;
        }
    },
    atualizar: async (id: number, status: string): Promise<Pedido> =>{
        const resposta = await api.patch<Pedido>(`/empresa/pedido/${id}/status`, { status });
        return resposta.data;
    }
};