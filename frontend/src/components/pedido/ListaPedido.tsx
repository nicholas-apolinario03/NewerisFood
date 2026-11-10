import type { Pedido, StatusPedido } from "../../types/pedido";

type ListaPedidosProps = {
    pedidos: Pedido[];
    onMudarStatus: (id: number, novoStatus: StatusPedido) => void;
};

export function ListaPedidos({ pedidos, onMudarStatus }: ListaPedidosProps) {
    if (!pedidos || pedidos.length === 0) {
        return <p>Nenhum pedido cadastrado no momento.</p>;
    }

    // Função simples para avançar o status sequencialmente
    function obterProximoStatus(statusAtual: StatusPedido): StatusPedido | null {
        switch (statusAtual) {
            case 'espera': return 'preparando';
            case 'preparando': return 'saiu para entrega';
            case 'saiu para entrega': return 'concluido';
            default: return null;
        }
    }

    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #dee2e6', background: '#f8f9fa' }}>
                        <th style={{ padding: '10px' }}>ID</th>
                        <th style={{ padding: '10px' }}>Cliente</th>
                        <th style={{ padding: '10px' }}>Telefone</th>
                        <th style={{ padding: '10px' }}>Itens Resumidos</th>
                        <th style={{ padding: '10px' }}>Status</th>
                        <th style={{ padding: '10px' }}>Total</th>
                        <th style={{ padding: '10px' }}>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => {
                        const proximoStatus = obterProximoStatus(pedido.status);
                        
                        // Cria um resumo rápido dos itens (ex: "1x Pizza Grande, 1x Coca-Cola")
                        const resumoItens = Array.isArray(pedido.pedido) 
                            ? pedido.pedido.map(item => `${item.quantidade}x ${item.nome}`).join(', ') 
                            : '';

                        return (
                            <tr key={pedido.id} style={{ borderBottom: '1px solid #e9ecef' }}>
                                <td style={{ padding: '10px', fontWeight: 'bold' }}>#{pedido.id}</td>
                                <td style={{ padding: '10px' }}>{pedido.cliente?.nome || 'Balcão'}</td>
                                <td style={{ padding: '10px' }}>{pedido.cliente?.telefone || '-'}</td>
                                <td style={{ padding: '10px', color: '#6c757d' }}>{resumoItens}</td>
                                <td style={{ padding: '10px', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                                    {pedido.status}
                                </td>
                                <td style={{ padding: '10px', fontWeight: 'bold', color: '#2b8a3e' }}>
                                    R$ {pedido.valorTotal.toFixed(2)}
                                </td>
                                <td style={{ padding: '10px' }}>
                                    {proximoStatus && (
                                        <button 
                                            onClick={() => onMudarStatus(pedido.id, proximoStatus)}
                                            style={{ padding: '4px 8px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                                        >
                                            Avançar ➔
                                        </button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}