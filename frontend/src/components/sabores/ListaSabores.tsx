import { CardSabores } from "./CardSabores";
import type { SaborCardapio } from "../../types/cardapio";
import "../../css/lista.css";

type ListarSaboresProps = {
    sabores: SaborCardapio[];
};

export function ListarSabores({ sabores }: ListarSaboresProps) {
    if (!sabores || sabores.length === 0) {
        return <p style={{ color: "#666", fontStyle: "italic", marginTop: "12px" }}>Nenhum insumo cadastrado no estoque.</p>;
    }

    return (
        <div className="lista-gestao">
            {sabores.map((sabores) => (
                <CardSabores
                    key={sabores.id}
                    sabor={sabores}
                />
            ))}
        </div>
    );
}