export type Insumo ={
    id: number;
    nome: string;
    unidadeMedida: 'kg'|'g' |'unidade' | 'ml' | 'l';
    quantidadeAtual: number;
    estoqueMinimo: number; //para alertas
};
 export type NovoInsumo = Omit<Insumo, 'id'>;