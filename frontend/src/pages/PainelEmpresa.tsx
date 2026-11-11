import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useCardapio } from "../hooks/useCardapio";
import { useSabores } from "../hooks/useSabores";
import { usePedidos } from "../hooks/usePedido";

import { FormularioPedido } from "../components/pedido/FormularioPedido";
import { ListaPedidos } from "../components/pedido/ListaPedido";
import { ListarCardapio } from "../components/cardapio/ListaCardapio";
import { ListarSabores } from "../components/sabores/ListaSabores";

import "../css/PainelEmpresa.css"; // Importação do CSS separado

export function PainelEmpresa() {
    const { produto, erro, carregando } = useCardapio();
    const { sabores } = useSabores();
    const { criarPedido, pedidos, alterarStatusPedido } = usePedidos();

    // Estados para recolher/expandir as secções da direita
    const [mostrarPedidos, setMostrarPedidos] = useState(true);
    const [mostrarCardapio, setMostrarCardapio] = useState(false);
    const [mostrarSabores, setMostrarSabores] = useState(false);

    return (
        <DashboardLayout>
            {/* Mensagem de Erro Geral */}
            {erro && (
                <div className="painel-empresa__alerta-erro">
                    {erro}
                </div>
            )}

            {/* Layout Principal de 2 Colunas */}
            <div className="painel-empresa">

                {/* COLUNA ESQUERDA: Formulário de Novo Pedido */}
                <div className="painel-empresa__coluna-esquerda">
                    <h2 className="painel-empresa__titulo">📝 Novo Pedido (Balcão / Tel)</h2>
                    <FormularioPedido
                        produtosDisponiveis={produto}
                        aoSalvar={criarPedido}
                        carregando={carregando}
                        saboresDisponiveis={sabores}
                    />
                </div>

                {/* COLUNA DIREITA: Listas Minimizadas / Acordeões */}
                <div className="painel-empresa__coluna-direita">

                    {/* 1. Secção de Pedidos Recentes (Últimas 24h) */}
                    <div className="painel-empresa__bloco-lista">
                        <div
                            className="painel-empresa__cabecalho-lista"
                            onClick={() => setMostrarPedidos(!mostrarPedidos)}
                        >
                            <h3 className="painel-empresa__subtitulo">
                                📋 Pedidos Recentes (24h) ({pedidos.length})
                            </h3>
                            <span className="painel-empresa__indicador">
                                {mostrarPedidos ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {mostrarPedidos && (
                            <div className="painel-empresa__conteudo-lista">
                                <ListaPedidos pedidos={pedidos} onMudarStatus={alterarStatusPedido} />
                            </div>
                        )}
                    </div>

                    {/* 2. Secção de Cardápio de Produtos */}
                    <div className="painel-empresa__bloco-lista">
                        <div
                            className="painel-empresa__cabecalho-lista"
                            onClick={() => setMostrarCardapio(!mostrarCardapio)}
                        >
                            <h3 className="painel-empresa__subtitulo">
                                🍕 Cardápio de Produtos ({produto.length})
                            </h3>
                            <span className="painel-empresa__indicador">
                                {mostrarCardapio ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {mostrarCardapio && (
                            <div className="painel-empresa__conteudo-lista">
                                <ListarCardapio produtos={produto} />
                            </div>
                        )}
                    </div>

                    {/* 3. Secção de Sabores Cadastrados */}
                    <div className="painel-empresa__bloco-lista">
                        <div
                            className="painel-empresa__cabecalho-lista"
                            onClick={() => setMostrarSabores(!mostrarSabores)}
                        >
                            <h3 className="painel-empresa__subtitulo">
                                🍅 Sabores Cadastrados ({sabores.length})
                            </h3>
                            <span className="painel-empresa__indicador">
                                {mostrarSabores ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {mostrarSabores && (
                            <div className="painel-empresa__conteudo-lista">
                                <ListarSabores sabores={sabores} />
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
}