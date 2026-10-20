import type { Cliente, NovoClienteDTO } from "./cliente";

export type StatusPedido = 'espera' | 'preparando' | 'pronto' | 'saiu para entrega' | 'concluido';

export type ItemPedido = {
    produtoId: number;
    nome: string;
    quantidade: number;
    precoUnitario: number;
    observacao?: string;
};

export type Pedido = {
    id: number;
    empresaId: number;
    clienteId: number;
    cliente: Cliente; // Objeto com nome, telefone e endereço
    status: StatusPedido;
    pedido: ItemPedido[];
    observacoes?: string;
    valorTotal: number;
    criadoEm?: string;
};

export type NovoPedidoDTO = {
    cliente: NovoClienteDTO; // Ou { telefone: string; nome: string; endereco: string; }
    pedido: ItemPedido[];
    observacoes?: string;
    valorTotal: number;
};