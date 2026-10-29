
import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";
import { useSabores } from "../hooks/useSabores";
import { useCardapio } from "../hooks/useCardapio";
import { useEstoque } from "../hooks/useEstoque";
import { FormularioInsumo } from "../components/estoque/FormularioEstoque";
import { FormularioProduto } from "../components/cardapio/FormularioProdutos";
import { ListarEstoque } from "../components/estoque/ListaEstoque";
import { FormularioSabor } from "../components/sabores/FormularioSabor";

export function EstoqueEmpresa() {
    const { insumos, carregando, erro, cadastrarInsumo } = useEstoque();
    const { produto, cadastrarProduto } = useCardapio()
    const { insumos: insumosDisponiveis } = useEstoque();
    const { carregando: carregandoSabores, salvarSabor } = useSabores();
    const [exibirFormularioTipos, setExibirFormularioTipos] = useState(false);
    const [exibirFormularioSabores, setExibirFormularioSabores] = useState(false);
    const [exibirFormularioEstoque, setExibirFormularioEstoque] = useState(false);
    const categoriasExistentes = Array.from(
        new Set(produto.map(p => p.categoria).filter(Boolean))
    );


    return (
        <DashboardLayout>

            <div>
                <button
                    onClick={() => setExibirFormularioTipos(!exibirFormularioTipos)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormularioTipos ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormularioTipos ? '✕ Fechar Formulário' : '➕ Adicionar ao Cardapio'}
                </button>
            </div>
            {/* Seção do Formulário de Pedido Manual (Expansível) */}
            {exibirFormularioTipos && (
                <div style={{ marginBottom: '30px' }}>
                    <FormularioProduto insumosDisponiveis={insumosDisponiveis} categorias={categoriasExistentes} aoSalvar={cadastrarProduto} carregando={carregando} />
                </div>
            )}
            {erro && <p style={{ color: "red" }}>{erro}</p>}



            <div>
                <button
                    onClick={() => setExibirFormularioSabores(!exibirFormularioSabores)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormularioSabores ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormularioSabores ? '✕ Fechar Formulário' : '➕ Adicionar Sabores'}
                </button>


                {/* Mensagem de Erro ou Alerta */}
                {erro && (
                    <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
                        {erro}
                    </div>
                )}

                
                {exibirFormularioSabores && (
                    <div style={{ marginBottom: '30px' }}>
                        <FormularioSabor
                            insumosDisponiveis={insumos}
                            aoSalvar={salvarSabor}
                            carregando={carregandoSabores}
                        />
                    </div>
                )}
            </div>



            <div>
                <button
                    onClick={() => setExibirFormularioEstoque(!exibirFormularioEstoque)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormularioEstoque ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormularioEstoque ? '✕ Fechar Formulário' : '➕ Adicionar Sabores'}
                </button>


                {/* Mensagem de Erro ou Alerta */}
                {erro && (
                    <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
                        {erro}
                    </div>
                )}

                {/* Seção do Formulário de Pedido Manual (Expansível) */}
                {exibirFormularioEstoque && (
                    <div style={{ marginBottom: '30px' }}>
                         <FormularioInsumo aoSalvar={cadastrarInsumo} carregando={carregando} />
                    </div>
                )}
            </div>





            <h2>Lista de Produtos</h2>
            <ListarEstoque insumos={insumos} />
        </DashboardLayout>
    )
}