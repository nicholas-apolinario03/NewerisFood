import type { NovoClienteDTO } from "./cliente";

export type StatusPedido = 'espera' | 'preparando' | 'pronto' | 'saiu para entrega' | 'concluido';

// Estrutura de cada fração de sabor escolhida (ex: 50% Calabresa, 50% Quatro Queijos)
export type SaborFracaoDTO = {
    saborId: string;
    nome: string;
    fracao: number; // Ex: 0.5
    preco: number;
};

// Item do pedido modular (serve para pizzas com frações ou produtos simples como bebidas)
export type ItemPedido = {
    produtoId: string;
    nome: string;
    quantidade: number;
    precoCalculado: number;
    saboresFracoes?: SaborFracaoDTO[]; // Lista de frações caso seja um produto fracionado
    observacao?: string;
};

export type Pedido = {
    id: number;
    empresaId: number;
    clienteId: number;
    cliente: any; 
    status: StatusPedido;
    pedido: ItemPedido[];
    observacoes?: string;
    valorTotal: number;
    criadoEm?: string;
};

export type NovoPedidoDTO = {
    cliente: NovoClienteDTO;
    pedido: ItemPedido[];
    observacoes?: string;
    valorTotal: number;
};