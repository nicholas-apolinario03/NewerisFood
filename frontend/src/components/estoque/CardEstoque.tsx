import type { Insumo } from "../../types/estoque";
type CardInsumoProps = {
    insumo: Insumo;
};


export function CardEstoque({
    insumo,
}: CardInsumoProps) {
    return (
        <div>
            <h3 className="titulo-servico_cabecalho">
                {insumo.nome}
            </h3>

            <p>
              {insumo.quantidadeAtual}  {insumo.unidadeMedida} 
            </p>
            <p>Minimo: {insumo.estoqueMinimo} </p>
        </div>
    );
}