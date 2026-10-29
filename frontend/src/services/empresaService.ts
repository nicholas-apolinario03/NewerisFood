import type { NovaEmpresaDTO, Empresa, LoginEmpresaDTO } from "../types/empresa";
import { api } from "./api";


export const empresaService = {
    criar: async (dados: NovaEmpresaDTO) => {
        try {
            const resposta = await api.post('/empresa/cadastro',dados);
            return resposta.data;

        } catch (error) {
            console.error("erro a empresa não foi cadastrada", error)
            throw error;
        }
    },
    entrar: async (dados: LoginEmpresaDTO) => {
        try {
            const resposta = await api.post('/empresa/login',dados);
            return resposta.data;

        } catch (error) {
            console.error("erro não foi possivel efetuar o login da empresa", error)
            throw error;
        }
    },
     listar: async (): Promise<Empresa> => {
            try {
                const resposta = await api.get('/empresa/perfil');
                return resposta.data;
            } catch (error) {
                console.error("Erro ao buscar o perfil da empresa", error);
                throw error;
            }
        },
        async atualizar(dados: NovaEmpresaDTO): Promise<Empresa> {
        const response = await api.put("/empresa/atualizar", dados);
        return response.data.empresa;
    }
    
}