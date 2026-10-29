import { CardCardapio } from "./CardCardapio";
import type { ProdutoCardapio } from "../../types/cardapio";
import "../../css/lista.css";

type ListarProdutoCardapioProps = {
    produtos?: ProdutoCardapio[];
};

export function ListarCardapio({ produtos = [] }: ListarProdutoCardapioProps) {
    const listaProdutos = Array.isArray(produtos) ? produtos : [];

    if (listaProdutos.length === 0) {
        return <p style={{ color: "#666", fontStyle: "italic", marginTop: "12px" }}>Nenhum produto cadastrado no cardápio.</p>;
    }

    return (
        <div className="lista-gestao">
            {listaProdutos.map((produto) => (
                <CardCardapio
                    key={produto.id}
                    produto={produto}
                />
            ))}
        </div>
    );
}