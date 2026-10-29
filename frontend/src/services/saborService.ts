import { api } from "./api";// O teu cliente Axios configurado
import type { SaborCardapio, NovoSaborDTO } from "../types/cardapio";

export async function listarSabores(): Promise<SaborCardapio[]> {
    const response = await api.get("/sabores/lista");
    return response.data;
}

export async function cadastrarSabor(dados: NovoSaborDTO): Promise<SaborCardapio> {
    const response = await api.post("/sabores/cadastro", dados);
    return response.data.sabor;
}