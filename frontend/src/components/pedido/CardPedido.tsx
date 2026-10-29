import type { Pedido, StatusPedido } from "../../types/pedido";

type CardPedidoProps = {
    pedido: Pedido;
    onMudarStatus: (id: number, novoStatus: StatusPedido) => void;
};

export function CardPedido({ pedido, onMudarStatus }: CardPedidoProps) {
    
    // Função auxiliar para definir o próximo status no fluxo do Kanban
    function obterProximoStatus(statusAtual: StatusPedido): StatusPedido | null {
        switch (statusAtual) {
            case 'espera': return 'preparando';
            case 'preparando': return 'saiu para entrega';
            case 'saiu para entrega': return 'concluido';
            default: return null;
        }
    }

    const proximoStatus = obterProximoStatus(pedido.status);

    function handleAvancar() {
        if (proximoStatus) {
            onMudarStatus(pedido.id, proximoStatus);
        }
    }

    // Cores dinâmicas simples para o selo de status
    const corStatusMap: Record<StatusPedido, string> = {
        'espera': '#e67e22',
        'preparando': '#f59f00',
        'saiu para entrega': '#0ca678',
        'concluido': '#495057',
        'pronto': '#2b8a3e'
    };

    return (
        <div style={{ background: '#fff', border: '1px solid #dee2e6', borderRadius: '8px', padding: '14px', marginBottom: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            
            {/* Cabeçalho do Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '15px', color: '#212529' }}>Pedido #{pedido.id}</strong>
                <span style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold', 
                    textTransform: 'uppercase', 
                    background: corStatusMap[pedido.status] || '#ccc', 
                    color: '#fff', 
                    padding: '2px 8px', 
                    borderRadius: '12px' 
                }}>
                    {pedido.status}
                </span>
            </div>

            {/* Informações do Cliente */}
            <div style={{ fontSize: '13px', color: '#495057', marginBottom: '10px', background: '#f8f9fa', padding: '8px', borderRadius: '6px' }}>
                <p style={{ margin: '0 0 2px 0' }}><strong>Cliente:</strong> {pedido.cliente?.nome || 'Balcão'}</p>
                <p style={{ margin: '0 0 2px 0' }}><strong>Tel:</strong> {pedido.cliente?.telefone || '-'}</p>
                <p style={{ margin: '0' }}><strong>Endereço:</strong> {pedido.cliente?.endereco || 'Retirada no local'}</p>
            </div>

            {/* Lista de Itens (JSON) */}
            <div style={{ borderTop: '1px dashed #dee2e6', borderBottom: '1px dashed #dee2e6', padding: '8px 0', marginBottom: '10px' }}>
                <p style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: 'bold', color: '#6c757d' }}>ITENS:</p>
                {Array.isArray(pedido.pedido) && pedido.pedido.map((item, index) => (
                    <div key={index} style={{ fontSize: '13px', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{item.quantidade}x {item.nome} {item.observacao && <span style={{ color: '#e03131', fontSize: '11px' }}>({item.observacao})</span>}</span>
                        <span style={{ color: '#6c757d' }}>R$ {(item.precoCalculado * item.quantidade).toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Observações gerais do pedido, se houver */}
            {pedido.observacoes && (
                <p style={{ fontSize: '12px', color: '#e03131', fontStyle: 'italic', margin: '0 0 10px 0' }}>
                    Obs: {pedido.observacoes}
                </p>
            )}

            {/* Rodapé do Card: Valor Total e Botão de Ação */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#2b8a3e' }}>
                    R$ {pedido.valorTotal.toFixed(2)}
                </span>

                {proximoStatus && (
                    <button 
                        onClick={handleAvancar}
                        style={{
                            padding: '6px 10px',
                            background: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Avançar ➔
                    </button>
                )}
            </div>

        </div>
    );
}
