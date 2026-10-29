import { useCardapio } from "../hooks/useCardapio";// Ou o teu hook correspondente
import { useSabores } from "../hooks/useSabores";
import { usePedidos } from "../hooks/usePedido";
import { TotemPedido } from "../components/cardapio/TotemPedido";
import type { NovoPedidoDTO } from "../types/pedido";

export function PaginaTotem() {
    const { produto } = useCardapio();
    const { sabores } = useSabores();
    const { criarPedido, carregando } = usePedidos();

    async function handleFinalizarPedido(dados: NovoPedidoDTO) {
        const sucesso = await criarPedido(dados);
        if (sucesso) {
            alert("Pedido realizado com sucesso pelo Totem!");
        } else {
            alert("Erro ao finalizar o pedido. Tente novamente.");
        }
    }

    return (
        <div style={{ minHeight: '100vh', background: '#f1f3f5', padding: '30px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <h1 style={{ margin: 0, color: '#212529' }}>🍕 Autoatendimento Neweris</h1>
                <p style={{ color: '#6c757d', margin: '4px 0 0 0' }}>Selecione os itens e monte o seu pedido por cliques</p>
            </div>

            <TotemPedido 
                produtosDisponiveis={produto}
                saboresDisponiveis={sabores}
                aoSalvar={handleFinalizarPedido}
                carregando={carregando}
            />
        </div>
    );
}