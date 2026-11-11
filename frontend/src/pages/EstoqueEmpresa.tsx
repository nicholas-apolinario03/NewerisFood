import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";
import { useSabores } from "../hooks/useSabores";
import { useCardapio } from "../hooks/useCardapio";
import { useEstoque } from "../hooks/useEstoque";
import { FormularioInsumo } from "../components/estoque/FormularioEstoque";
import { FormularioProduto } from "../components/cardapio/FormularioProdutos";
import { ListarEstoque } from "../components/estoque/ListaEstoque";
import { FormularioSabor } from "../components/sabores/FormularioSabor";

import "../css/EstoqueEmpresa.css"; // Importação do CSS dedicado

export function EstoqueEmpresa() {
    const { insumos, carregando, erro, cadastrarInsumo, excluirInsumo } = useEstoque();
    const { produto, cadastrarProduto } = useCardapio();
    const { carregando: carregandoSabores, salvarSabor } = useSabores();

    // Estados independentes para recolher/expandir cada formulário
    const [exibirFormularioTipos, setExibirFormularioTipos] = useState(false);
    const [exibirFormularioSabores, setExibirFormularioSabores] = useState(false);
    const [exibirFormularioEstoque, setExibirFormularioEstoque] = useState(false);

    const categoriasExistentes = Array.from(
        new Set(produto.map(p => p.categoria).filter(Boolean))
    );

    return (
        <DashboardLayout>
            {/* Mensagem de Erro Geral */}
            {erro && (
                <div className="estoque-empresa__alerta-erro">
                    {erro}
                </div>
            )}

            {/* Layout Principal de 2 Colunas */}
            <div className="estoque-empresa">

                {/* COLUNA ESQUERDA: Formulários Minimizados / Acordeões */}
                <div className="estoque-empresa__coluna-esquerda">

                    {/* 1. Formulário de Produto Base */}
                    <div className="estoque-empresa__bloco-formulario">
                        <div
                            className="estoque-empresa__cabecalho-formulario"
                            onClick={() => setExibirFormularioTipos(!exibirFormularioTipos)}
                        >
                            <h3 className="estoque-empresa__subtitulo">
                                ➕ Adicionar ao Cardápio (Produto Base)
                            </h3>
                            <span className="estoque-empresa__indicador">
                                {exibirFormularioTipos ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {exibirFormularioTipos && (
                            <div className="estoque-empresa__conteudo-formulario">
                                <FormularioProduto
                                    insumosDisponiveis={insumos}
                                    categorias={categoriasExistentes}
                                    aoSalvar={cadastrarProduto}
                                    carregando={carregando}
                                />
                            </div>
                        )}
                    </div>

                    {/* 2. Formulário de Sabores */}
                    <div className="estoque-empresa__bloco-formulario">
                        <div
                            className="estoque-empresa__cabecalho-formulario"
                            onClick={() => setExibirFormularioSabores(!exibirFormularioSabores)}
                        >
                            <h3 className="estoque-empresa__subtitulo">
                                ➕ Adicionar Sabores
                            </h3>
                            <span className="estoque-empresa__indicador">
                                {exibirFormularioSabores ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {exibirFormularioSabores && (
                            <div className="estoque-empresa__conteudo-formulario">
                                <FormularioSabor
                                    insumosDisponiveis={insumos}
                                    aoSalvar={salvarSabor}
                                    carregando={carregandoSabores}
                                />
                            </div>
                        )}
                    </div>

                    {/* 3. Formulário de Insumos / Estoque */}
                    <div className="estoque-empresa__bloco-formulario">
                        <div
                            className="estoque-empresa__cabecalho-formulario"
                            onClick={() => setExibirFormularioEstoque(!exibirFormularioEstoque)}
                        >
                            <h3 className="estoque-empresa__subtitulo">
                                ➕ Adicionar Insumo ao Estoque
                            </h3>
                            <span className="estoque-empresa__indicador">
                                {exibirFormularioEstoque ? '▲ Recolher' : '▼ Expandir'}
                            </span>
                        </div>

                        {exibirFormularioEstoque && (
                            <div className="estoque-empresa__conteudo-formulario">
                                <FormularioInsumo
                                    aoSalvar={cadastrarInsumo}
                                    carregando={carregando}
                                />
                            </div>
                        )}
                    </div>

                </div>

                {/* COLUNA DIREITA: Lista de Insumos em Estoque */}
                <div className="estoque-empresa__coluna-direita">
                    <h2 className="estoque-empresa__titulo">📦 Lista de Insumos em Estoque</h2>
                    <ListarEstoque insumos={insumos} onExcluir={excluirInsumo} />
                </div>

            </div>
        </DashboardLayout>
    );
}