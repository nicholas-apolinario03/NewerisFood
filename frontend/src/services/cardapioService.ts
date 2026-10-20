import { api } from "./api";
import type { ProdutoCardapio, NovoProdutoDTO } from "../types/cardapio";

export const cardapioService = {
    listar: async (): Promise<ProdutoCardapio[]> => {
        try {
            const resposta = await api.get('/empresa/cardapio/lista');
            return resposta.data;
        } catch (error) {
            console.error("Erro ao listar o cardápio", error);
            throw error;
        }
    },

    criar: async (dados: NovoProdutoDTO): Promise<ProdutoCardapio> => {
        try {
            const resposta = await api.post('/empresa/cardapio/cadastro', dados);
            return resposta.data;
        } catch (error) {
            console.error("Erro ao cadastrar produto no cardápio", error);
            throw error;
        }
    }
};