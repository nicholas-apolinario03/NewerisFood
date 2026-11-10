import { useCardapio } from "../hooks/useCardapio";
import { ListarCardapio } from "../components/cardapio/ListaCardapio";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { usePedidos } from "../hooks/usePedido";
import { FormularioPedido } from "../components/pedido/FormularioPedido";
import { useSabores } from "../hooks/useSabores";
import { ListarSabores } from "../components/sabores/ListaSabores";
import { ListaPedidos } from "../components/pedido/ListaPedido";


export function PainelEmpresa() {
    const { produto, erro, carregando } = useCardapio()
    const { sabores } = useSabores(); // Supondo que tenhas um hook similar para insumos
    const { criarPedido } = usePedidos();
    const [exibirFormularioPedido, setExibirFormularioPedido] = useState(false);
    const { pedidos, alterarStatusPedido } = usePedidos();

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

            <div>
                {pedidos.map(pedido => (
                    <details key={pedido.id} style={{ background: '#fff', marginBottom: '8px', padding: '12px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                            <span>Pedido #{pedido.id} — {pedido.cliente?.nome || 'Balcão'}</span>
                            <span style={{ color: '#2b8a3e' }}>R$ {pedido.valorTotal.toFixed(2)}</span>
                        </summary>

                        {/* Conteúdo que aparece ao expandir */}
                        <div style={{ marginTop: '12px', borderTop: '1px dashed #dee2e6', paddingTop: '8px' }}>
                            <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#666' }}>Itens do Pedido:</p>
                            {pedido.pedido.map((item, idx) => (
                                <div key={idx} style={{ fontSize: '14px', padding: '4px 0' }}>
                                    {item.quantidade}x <strong>{item.nome}</strong>
                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </div>

            <ListarCardapio produtos={produto} />
            <ListarSabores sabores={sabores} />
        </DashboardLayout>
    )
}