import { FormularioProduto } from "../components/cardapio/FormularioProdutos";
import { useCardapio } from "../hooks/useCardapio";
import { useEstoque } from "../hooks/useEstoque";
import { ListarCardapio } from "../components/cardapio/ListaCardapio";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { usePedidos } from "../hooks/usePedido";
import { FormularioPedido } from "../components/pedido/FormularioPedido";
import { useSabores } from "../hooks/useSabores";


export function PainelEmpresa() {
    const { produto, erro, carregando, cadastrarProduto } = useCardapio()
    const { sabores,  salvarSabor } = useSabores(); // Supondo que tenhas um hook similar para insumos
    const { criarPedido } = usePedidos();
    const [exibirFormularioPedido, setExibirFormularioPedido] = useState(false);


    return (
        <DashboardLayout>
          


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
            

      
           
            <ListarCardapio produtos={produto} />
        </DashboardLayout>
    )
}