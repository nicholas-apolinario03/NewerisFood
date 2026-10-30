import type { Insumo } from "../../types/estoque";
import "../../css/lista.css";

type CardInsumoProps = {
    insumo: Insumo;
    onExcluir: (id: number | string) => void; // <-- Recebe a função de exclusão
};

export function CardEstoque({ insumo, onExcluir }: CardInsumoProps) {
    const emAlerta = insumo.quantidadeAtual <= insumo.estoqueMinimo;

    return (
        <div className="lista-gestao__card">
            <div className="lista-gestao__info">
                <h3 className="lista-gestao__titulo">{insumo.nome}</h3>
                <p className="lista-gestao__subtitulo">
                    Estoque Mínimo: {insumo.estoqueMinimo} {insumo.unidadeMedida}
                </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div className="lista-gestao__métrica">
                    <span className="lista-gestao__valor" style={{ color: emAlerta ? "#e03131" : "#2b8a3e" }}>
                        {insumo.quantidadeAtual} {insumo.unidadeMedida}
                    </span>
                    <span className={`lista-gestao__badge ${emAlerta ? "lista-gestao__badge--alerta" : ""}`}>
                        {emAlerta ? "⚠️ Repor" : "OK"}
                    </span>
                </div>

                {/* Botão de Excluir */}
                <button 
                    onClick={() => {
                        if (confirm(`Tens certeza que desejas excluir o insumo "${insumo.nome}"?`)) {
                            onExcluir(insumo.id);
                        }
                    }}
                    style={{ background: 'none', border: 'none', color: '#e03131', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                    title="Excluir insumo"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}