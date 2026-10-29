import type { Insumo } from "../../types/estoque";
import "../../css/lista.css";

type CardInsumoProps = {
    insumo: Insumo;
};

export function CardEstoque({ insumo }: CardInsumoProps) {
    const emAlerta = insumo.quantidadeAtual <= insumo.estoqueMinimo;

    return (
        <div className="lista-gestao__card">
            <div className="lista-gestao__info">
                <h3 className="lista-gestao__titulo">{insumo.nome}</h3>
                <p className="lista-gestao__subtitulo">
                    Estoque Mínimo Recomendado: {insumo.estoqueMinimo} {insumo.unidadeMedida}
                </p>
            </div>

            <div className="lista-gestao__métrica">
                <span className="lista-gestao__valor" style={{ color: emAlerta ? "#e03131" : "#2b8a3e" }}>
                    {insumo.quantidadeAtual} {insumo.unidadeMedida}
                </span>
                <span className={`lista-gestao__badge ${emAlerta ? "lista-gestao__badge--alerta" : ""}`}>
                    {emAlerta ? "⚠️ Repor Estoque" : "Estoque OK"}
                </span>
            </div>
        </div>
    );
}