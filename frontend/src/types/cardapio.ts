// Define o item do insumo dentro da ficha técnica
export type ItemReceitaDTO = {
    insumoId: number;
    quantidadeGasta: number; 
};

// Estrutura de um Sabor (Recheio e respetiva ficha técnica de insumos)
export type SaborCardapio = {
    id: string;
    nome: string;
    preco: number;
    disponivel: boolean;
    ingredientes?: ItemReceitaDTO[];
};

// Estrutura de um Produto Base do Cardápio (Ex: Pizza Grande, Bebidas, etc.)
export type ProdutoCardapio = {
    id: string;
    nome: string;
    descricao: string;
    precoBase: number; // Substituiu o preço fixo antigo
    categoria: string;
    disponivel: boolean;
    maxFracoes: number;          // Ex: 1 para bebidas, 2 ou mais para pizzas
    permiteFracionamento: boolean;
    ingredientes?: ItemReceitaDTO[]; // Insumos base opcionais (ex: caixa, massa)
};

// DTOs para criação (sem ID)
export type NovoProdutoDTO = Omit<ProdutoCardapio, 'id'>;
export type NovoSaborDTO = Omit<SaborCardapio, 'id'>;