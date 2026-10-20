export type Cliente = {
    id: Number;
    nome: string; 
    telefone: string;    
    endereco: string;
}
 export type NovoClienteDTO = Omit<Cliente, 'id'>