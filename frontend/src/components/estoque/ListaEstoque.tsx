import { CardEstoque } from "./CardEstoque";
import type { Insumo } from "../../types/estoque";

type ListarInsumoProps = {

    insumos: Insumo[];
   
};

export function ListarEstoque({ insumos }: ListarInsumoProps) {
    return (

        <div>
            {insumos.map((insumo) => (

                <CardEstoque
                    key={insumo.id}
                    insumo={insumo}
                    

                />

            ))}
        </div>
    )
}
