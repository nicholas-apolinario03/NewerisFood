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
}