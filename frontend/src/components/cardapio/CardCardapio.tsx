import type { ProdutoCardapio } from "../../types/cardapio";
import "../../css/lista.css";

type CardProdutoCardapioProps = {
    produto: ProdutoCardapio;
};

export function CardCardapio({ produto }: CardProdutoCardapioProps) {
    return (
        <div className="lista-gestao__card">
            <div className="lista-gestao__info">
                <h3 className="lista-gestao__titulo">{produto.nome}</h3>
                <p className="lista-gestao__subtitulo">
                    <strong>{produto.categoria}</strong> {produto.descricao && `— ${produto.descricao}`}
                </p>

                {/* Sub-lista com a ficha técnica dos insumos */}
                {produto.ingredientes && produto.ingredientes.length > 0 && (
                    <ul className="lista-gestao__sublista">
                        {produto.ingredientes.map((item: any) => (
                            <li key={item.id || item.insumoId} className="lista-gestao__subitem">
                                {item.insumo ? item.insumo.nome : "Insumo"} — {item.quantidadeGasta} {item.insumo?.unidadeMedida}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="lista-gestao__métrica">
                <span className="lista-gestao__valor">
                    R$ {(produto.precoBase || 0).toFixed(2)}
                </span>
                <span className="lista-gestao__badge">
                    Máx: {produto.maxFracoes || 1} {produto.maxFracoes && produto.maxFracoes > 1 ? "sabores" : "sabor"}
                </span>
            </div>
        </div>
    );
}