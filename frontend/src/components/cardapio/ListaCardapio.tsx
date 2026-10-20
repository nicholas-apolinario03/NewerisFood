import { CardCardapio } from "./CardCardapio";
import type { ProdutoCardapio } from "../../types/cardapio";

type ListarProdutoCardapioProps = {
    produtos?: ProdutoCardapio[];
};

export function ListarCardapio({ produtos = [] }: ListarProdutoCardapioProps) {
    const listaProdutos = Array.isArray(produtos) ? produtos : [];

    if (listaProdutos.length === 0) {
        return <p>Nenhum produto cadastrado no cardápio.</p>;
    }

    return (
        <div>
            {listaProdutos.map((produto) => (
                <CardCardapio
                    key={produto.id}
                    produto={produto}
                />
            ))}
        </div>
    );
}