// Define o item do insumo dentro da ficha técnica do produto
export type ItemReceitaDTO = {
    insumoId: number;
    quantidadeGasta: number; // Quanto gasta desse insumo para fazer 1 unidade do produto
};

// Estrutura de um Produto do Cardápio
export type ProdutoCardapio = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria: string
    disponivel: boolean;
    ingredientes?: ItemReceitaDTO[]; // Opcional: liga o produto ao estoque
};

// DTO para criação (sem ID)
export type NovoProdutoDTO = Omit<ProdutoCardapio, 'id'>;