import { FormularioProduto } from "../components/cardapio/FormularioProdutos";
import { useCardapio } from "../hooks/useCardapio";
import { useEstoque } from "../hooks/useEstoque";
import { ListarCardapio } from "../components/cardapio/ListaCardapio";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { usePedidos } from "../hooks/usePedido";
import { FormularioPedido } from "../components/pedido/FormularioPedido";
import { useSabores } from "../hooks/useSabores";
import { FormularioSabor } from "../components/sabores/FormularioSabor";

export function PainelEmpresa() {
    const { produto, erro, carregando, cadastrarProduto } = useCardapio()
    const { insumos: insumosDisponiveis } = useEstoque();
    const [exibirFormularioCardapio, setExibirFormularioCardapio] = useState(false);
    const { criarPedido } = usePedidos();
   const [exibirFormularioPedido, setExibirFormularioPedido] = useState(false);
    const { sabores, carregando: carregandoSabores, salvarSabor } = useSabores();
    const { insumos } = useEstoque(); // Supondo que tenhas um hook similar para insumos

    async function handleSalvar(dados: any) {
        const sucesso = await salvarSabor(dados);
        if (sucesso) {
            alert("Sabor cadastrado com sucesso!");
        } else {
            alert("Erro ao cadastrar sabor.");
        }
    }
    const categoriasExistentes = Array.from(
        new Set(produto.map(p => p.categoria).filter(Boolean))
    );
    return (
        <DashboardLayout>
            <div>
                <button
                    onClick={() => setExibirFormularioCardapio(!exibirFormularioCardapio)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormularioCardapio ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormularioCardapio ? '✕ Fechar Formulário' : '➕ Adicionar ao Cardapio'}
                </button>
            </div>
            {/* Seção do Formulário de Pedido Manual (Expansível) */}
            {exibirFormularioCardapio && (
                <div style={{ marginBottom: '30px' }}>
                    <FormularioProduto insumosDisponiveis={insumosDisponiveis} categorias={categoriasExistentes} aoSalvar={cadastrarProduto} carregando={carregando} />
                </div>
            )}
            {erro && <p style={{ color: "red" }}>{erro}</p>}



            <div>
                <button
                    onClick={() => setExibirFormularioPedido(!exibirFormularioPedido)}
                    style={{
                        padding: '10px 18px',
                        background: exibirFormularioPedido ? '#6c757d' : '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    {exibirFormularioPedido ? '✕ Fechar Formulário' : '➕ Novo Pedido (Balcão/Tel)'}
                </button>


                {/* Mensagem de Erro ou Alerta */}
                {erro && (
                    <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '6px', marginBottom: '20px' }}>
                        {erro}
                    </div>
                )}

                {/* Seção do Formulário de Pedido Manual (Expansível) */}
                {exibirFormularioPedido && (
                    <div style={{ marginBottom: '30px' }}>
                        <FormularioPedido
                            produtosDisponiveis={produto}
                            aoSalvar={criarPedido}
                            carregando={carregando}
                            saboresDisponiveis={sabores}
                        />
                    </div>
                )}
            </div>
            <FormularioSabor 
                insumosDisponiveis={insumos}
                aoSalvar={handleSalvar}
                carregando={carregandoSabores}
            />
            <ListarCardapio produtos={produto} />
        </DashboardLayout>
    )
}