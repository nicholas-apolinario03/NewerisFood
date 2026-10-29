import { CardEstoque } from "./CardEstoque";
import type { Insumo } from "../../types/estoque";
import "../../css/lista.css";

type ListarInsumoProps = {
    insumos: Insumo[];
};

export function ListarEstoque({ insumos }: ListarInsumoProps) {
    if (!insumos || insumos.length === 0) {
        return <p style={{ color: "#666", fontStyle: "italic", marginTop: "12px" }}>Nenhum insumo cadastrado no estoque.</p>;
    }

    return (
        <div className="lista-gestao">
            {insumos.map((insumo) => (
                <CardEstoque
                    key={insumo.id}
                    insumo={insumo}
                />
            ))}
        </div>
    );
}