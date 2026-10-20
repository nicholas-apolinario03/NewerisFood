
import { FormularioInsumo } from "../components/estoque/FormularioEstoque";
import { ListarEstoque } from "../components/estoque/ListaEstoque";
import { useEstoque } from "../hooks/useEstoque";


export function EstoqueEmpresa() {
const { insumos, carregando, erro, cadastrarInsumo } = useEstoque();
    return (
        <div>
            <h2>Cadastro de Produto do Estoque</h2>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <FormularioInsumo aoSalvar={cadastrarInsumo} carregando={carregando} />

            <h2>Lista de Produtos</h2>
            <ListarEstoque insumos={insumos} />
        </div>
    )
}