export interface Empresa {
    id: number;
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    endereco: string;

} 
export type NovaEmpresaDTO = Omit<Empresa,"id">;
export type LoginEmpresaDTO = {
  email: string;
  senha: string;
};