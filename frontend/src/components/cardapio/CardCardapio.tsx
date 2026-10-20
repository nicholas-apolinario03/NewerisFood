import type { ProdutoCardapio } from "../../types/cardapio";
type CardProdutoCardapioProps = {
    produto: ProdutoCardapio;
};


export function CardCardapio({ produto,}: CardProdutoCardapioProps) {
    return (
        <div>
            <h3 className="titulo-servico_cabecalho">
                {produto.nome}
            </h3>

            <p>
                {produto.categoria}  {produto.descricao}
            </p>
            {produto.ingredientes && produto.ingredientes.length > 0 && (

                
                    produto.ingredientes.map((item: any) => (
                        <li key={item.id}>
                            {item.insumo ? item.insumo.nome : "Insumo"} — {item.quantidadeGasta} {item.insumo?.unidadeMedida}
                        </li>
                    ))
            )}
                
                
        </div>
    );
}