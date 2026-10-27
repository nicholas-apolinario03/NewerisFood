import { useState } from "react";
import { usePedidos } from "../hooks/usePedido";
import { CardPedido } from "../components/pedido/CardPedido";
import DashboardLayout from "../layouts/DashboardLayout";

export function PaginaPedidos() {
    const { pedidos, carregando,  alterarStatusPedido } = usePedidos();
     // Pega os produtos do cardápio para o formulário

    // Estado para controlar a exibição do formulário de novo pedido
    const [exibirFormulario, setExibirFormulario] = useState(false);

    // Separa os pedidos por coluna do Kanban
    const espera = pedidos.filter(p => p.status === 'espera');
    const preparando = pedidos.filter(p => p.status === 'preparando');
    const saiuEntrega = pedidos.filter(p => p.status === 'saiu para entrega');

    return (
        <DashboardLayout >

            {/* Cabeçalho do Painel */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>📋 Gestão de Pedidos</h1>
                    <p style={{ margin: '4px 0 0 0', color: '#666' }}>Acompanhe em tempo real as etapas da cozinha e entrega.</p>
                </div>

            </div>

            {/* Estado de Carregamento Inicial */}
            {carregando && !exibirFormulario && (
                <p style={{ color: '#666', fontStyle: 'italic' }}>Carregando pedidos...</p>
            )}

            {/* Board Kanban / Listagem de Pedidos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>

                {/* Coluna 1: Em Espera */}
                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                    <h3 style={{ marginTop: 0, color: '#e67e22', borderBottom: '2px solid #e67e22', paddingBottom: '8px' }}>
                        ⏳ Em Espera ({espera.length})
                    </h3>
                    {espera.length === 0 ? (
                        <p style={{ color: '#999', fontSize: '14px' }}>Nenhum pedido aguardando.</p>
                    ) : (
                        espera.map(p => (
                            <CardPedido key={p.id} pedido={p} onMudarStatus={alterarStatusPedido} />
                        ))
                    )}
                </div>

                {/* Coluna 2: Em Preparo */}
                <div style={{ background: '#fff9db', padding: '16px', borderRadius: '8px', border: '1px solid #ffe066' }}>
                    <h3 style={{ marginTop: 0, color: '#f59f00', borderBottom: '2px solid #f59f00', paddingBottom: '8px' }}>
                        👨‍🍳 Na Cozinha ({preparando.length})
                    </h3>
                    {preparando.length === 0 ? (
                        <p style={{ color: '#999', fontSize: '14px' }}>Nenhum pedido em preparo.</p>
                    ) : (
                        preparando.map(p => (
                            <CardPedido key={p.id} pedido={p} onMudarStatus={alterarStatusPedido} />
                        ))
                    )}
                </div>

                {/* Coluna 3: Saiu para Entrega */}
                <div style={{ background: '#e6fcf5', padding: '16px', borderRadius: '8px', border: '1px solid #96f2d7' }}>
                    <h3 style={{ marginTop: 0, color: '#0ca678', borderBottom: '2px solid #0ca678', paddingBottom: '8px' }}>
                        🛵 Saiu para Entrega ({saiuEntrega.length})
                    </h3>
                    {saiuEntrega.length === 0 ? (
                        <p style={{ color: '#999', fontSize: '14px' }}>Nenhum pedido em trânsito.</p>
                    ) : (
                        saiuEntrega.map(p => (
                            <CardPedido key={p.id} pedido={p} onMudarStatus={alterarStatusPedido} />
                        ))
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
}