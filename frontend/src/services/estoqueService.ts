import type { Insumo, NovoInsumo } from "../types/estoque";
import { api } from "./api";


export const estoqueService = {
    criar: async (dados: NovoInsumo) => {
        try {
            const resposta = await api.post('/empresa/estoque/cadastro',dados);
            return resposta.data;

        } catch (error) {
            console.error("erro o insumo não foi cadastrado no estoque", error)
            throw error;
        }
    },
      listar: async (): Promise<Insumo[]> => {
        try {
            const resposta = await api.get('/empresa/estoque/lista');
            return resposta.data;
        } catch (error) {
            console.error("Erro ao listar o cardápio", error);
            throw error;
        }
    },
    excluir: async (id: number | string): Promise<void> => {
        try {
            await api.delete(`/empresa/estoque/${id}`);
        } catch (error) {
            console.error("Erro ao excluir insumo do estoque", error);
            throw error;
        }
    }
    
}
