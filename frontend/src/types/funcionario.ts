export type Funcionario={

    id: number;
    empresaid: number;
    nome: string;
    email?: string;
    telefone: string
} 
export type NovofuncionarioDTO= Omit<Funcionario, "id">