import type { Pedido, StatusPedido } from "../../types/pedido";

type CardPedidoProps = {
    pedido: Pedido;
    onMudarStatus: (id: number, novoStatus: StatusPedido) => void;
};

export function CardPedido({ pedido, onMudarStatus }: CardPedidoProps) {
    
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

            {/* Lista de Itens e Sabores Fracionados */}
            <div style={{ borderTop: '1px dashed #dee2e6', borderBottom: '1px dashed #dee2e6', padding: '8px 0', marginBottom: '10px' }}>
                <p style={{ margin: '0 0 6px 0', fontSize: '12px', fontWeight: 'bold', color: '#6c757d' }}>ITENS:</p>
                {Array.isArray(pedido.pedido) && pedido.pedido.map((item, index) => (
                    <div key={index} style={{ fontSize: '13px', marginBottom: '8px', borderBottom: index < pedido.pedido.length - 1 ? '1px solid #f1f3f5' : 'none', paddingBottom: '4px' }}>
                        
                        {/* Nome do Produto Base e Preço */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span><strong>{item.quantidade}x {item.nome}</strong></span>
                            <span style={{ color: '#6c757d' }}>R$ {(item.precoCalculado * item.quantidade).toFixed(2)}</span>
                        </div>

                        {/* Exibição detalhada dos Sabores / Frações associados ao item */}
                        {item.saboresFracoes && Array.isArray(item.saboresFracoes) && item.saboresFracoes.length > 0 && (
                            <ul style={{ fontSize: '12px', color: '#333', margin: '3px 0 3px 15px', padding: 0, listStyleType: 'disc' }}>
                                {item.saboresFracoes.map((sf: any, i: number) => (
                                    <li key={i}>
                                        <strong>{Math.round(sf.fracao * 100)}%</strong> — {sf.nome}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Observação do item */}
                        {item.observacao && (
                            <p style={{ color: '#e03131', fontSize: '11px', margin: '2px 0 0 0', fontStyle: 'italic' }}>
                                Obs: {item.observacao}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Observações gerais do pedido, se houver */}
            {pedido.observacoes && (
                <p style={{ fontSize: '12px', color: '#e03131', fontStyle: 'italic', margin: '0 0 10px 0' }}>
                    Obs Geral: {pedido.observacoes}
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