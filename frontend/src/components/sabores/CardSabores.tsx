import type { SaborCardapio } from "../../types/cardapio";
import "../../css/lista.css";

type CardSaboresProps = {
    sabor: SaborCardapio;
};

export function CardSabores({ sabor }: CardSaboresProps) {

    return (
        <div className="lista-gestao__card">
            <div className="lista-gestao__info">
                <h3 className="lista-gestao__titulo">{sabor.nome}</h3>
                <p className="lista-gestao__subtitulo">
                    Preço: R${sabor.nome} 
                    Disponibilidade: {sabor.disponivel}

                </p>
            </div>
        </div>
    );
}