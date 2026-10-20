import type { NovofuncionarioDTO } from "../types/funcionario";
import { api } from "./api";


export const empresaService={
    criar: async(dados: NovofuncionarioDTO)=>{
        try{
            //const resposta = await api.post('/empresa/cadastro',dados);
            //return resposta.data;
            
        }catch(error){
            console.error("erro a funcionario não foi cadastrado", error)
            throw error;
        }
    },
}