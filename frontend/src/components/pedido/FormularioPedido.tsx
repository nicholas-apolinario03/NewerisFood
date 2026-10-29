import { useState, type FormEvent, useEffect } from "react";
import type { ProdutoCardapio, SaborCardapio } from "../../types/cardapio";
import type { ItemPedido, NovoPedidoDTO, SaborFracaoDTO } from "../../types/pedido";
import "../../css/formulario.css";

type FormularioPedidoProps = {
    produtosDisponiveis: ProdutoCardapio[];
    saboresDisponiveis: SaborCardapio[]; // Nova prop com os sabores cadastrados
    aoSalvar: (dados: NovoPedidoDTO) => void;
    carregando: boolean;
};

export function FormularioPedido({ produtosDisponiveis = [], saboresDisponiveis = [], aoSalvar, carregando }: FormularioPedidoProps) {
    const [telefone, setTelefone] = useState("");
    const [clienteNome, setClienteNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoesGerais, setObservacoesGerais] = useState("");
    
    const [itens, setItens] = useState<ItemPedido[]>([]);

    // Estados para seleção do item atual
    const [produtoSelecionadoId, setProdutoSelecionadoId] = useState<string>("");
    const [quantidade, setQuantidade] = useState<number>(1);
    const [obsItem, setObsItem] = useState("");
    
    // Estados para frações de sabores
    const [saboresEscolhidos, setSaboresEscolhidos] = useState<{ saborId: string; fracao: number }[]>([]);

    const produtoAtual = produtosDisponiveis.find(p => p.id === produtoSelecionadoId);

    // Sempre que trocar de produto, reseta os sabores escolhidos
    useEffect(() => {
        setSaboresEscolhidos([]);
    }, [produtoSelecionadoId]);

    function handleAdicionarSaborFracao(saborId: string) {
        if (!produtoAtual) return;
        const max = produtoAtual.maxFracoes || 1;

        // Se já atingiu o limite de frações, não deixa adicionar mais
        const totalFracoesAtual = saboresEscolhidos.reduce((acc, curr) => acc + curr.fracao, 0);
        const fracaoPadrao = 1 / max;

        if (totalFracoesAtual + fracaoPadrao > 1) {
            alert(`Este produto permite no máximo ${max} frações.`);
            return;
        }

        setSaboresEscolhidos([...saboresEscolhidos, { saborId, fracao: fracaoPadrao }]);
    }

    function removerSaborFracao(index: number) {
        setSaboresEscolhidos(saboresEscolhidos.filter((_, i) => i !== index));
    }

    function adicionarItemAoPedido() {
        if (!produtoAtual) return;

        if (produtoAtual.maxFracoes > 1 && saboresEscolhidos.length === 0) {
            alert("Selecione pelo menos um sabor para este produto fracionado.");
            return;
        }

        // Regra de cálculo de preço: Preço Base do Tamanho + Sabor mais caro entre as frações escolhidas
        let precoSaborMaisCaro = 0;
        const fracoesFormatadas: SaborFracaoDTO[] = saboresEscolhidos.map(item => {
            const saborInfo = saboresDisponiveis.find(s => s.id === item.saborId);
            const precoSabor = saborInfo?.preco || 0;
            if (precoSabor > precoSaborMaisCaro) {
                precoSaborMaisCaro = precoSabor;
            }
            return {
                saborId: item.saborId,
                nome: saborInfo?.nome || "Sabor",
                fracao: item.fracao,
                preco: precoSabor
            };
        });

        const precoCalculado = (produtoAtual.precoBase || 0) + precoSaborMaisCaro;

        const novoItem: ItemPedido = {
            produtoId: produtoAtual.id,
            nome: produtoAtual.nome,
            quantidade: Number(quantidade),
            precoCalculado,
            saboresFracoes: fracoesFormatadas.length > 0 ? fracoesFormatadas : undefined,
            observacao: obsItem.trim() || undefined
        };

        setItens([...itens, novoItem]);

        // Reseta campos
        setProdutoSelecionadoId("");
        setQuantidade(1);
        setSaboresEscolhidos([]);
        setObsItem("");
    }

    function removerItem(index: number) {
        setItens(itens.filter((_, i) => i !== index));
    }

    const valorTotal = itens.reduce((acc, item) => acc + (item.precoCalculado * item.quantidade), 0);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (itens.length === 0) {
            alert("Adicione pelo menos um item ao pedido.");
            return;
        }

        aoSalvar({
            cliente: { telefone, nome: clienteNome, endereco },
            pedido: itens,
            observacoes: observacoesGerais.trim() || undefined,
            valorTotal
        });
    }

    return (
        <div className="pagina-login">
        <form onSubmit={handleSubmit} className="formulario formulario--amplo">
            <header className="formulario__cabecalho">
                <h1>📝 Novo Pedido Modular</h1>
                <p>Atendimento de balcão / telefone com suporte a frações</p>
            </header>

            {/* Dados do Cliente */}
            <div className="formulario__secao">
                <h4>Dados do Cliente</h4>
                <div className="formulario__linha">
                    <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required style={{ flex: 1 }} />
                    <input type="text" placeholder="Nome" value={clienteNome} onChange={(e) => setClienteNome(e.target.value)} required style={{ flex: 1 }} />
                </div>
                <input type="text" placeholder="Endereço Completo" value={endereco} onChange={(e) => setEndereco(e.target.value)} required style={{ width: "100%" }} />
            </div>

            <hr />

            {/* Seleção de Produto Base */}
            <div className="formulario__secao">
                <h4>Adicionar Item</h4>
                <div className="formulario__linha">
                    <select 
                        value={produtoSelecionadoId} 
                        onChange={(e) => setProdutoSelecionadoId(e.target.value)}
                        style={{ flex: 2 }}
                    >
                        <option value="">Selecione o tamanho/produto base...</option>
                        {produtosDisponiveis.map(prod => (
                            <option key={prod.id} value={prod.id}>
                                {prod.nome} (Base: R$ {prod.precoBase.toFixed(2)})
                            </option>
                        ))}
                    </select>

                    <input 
                        type="number" 
                        min="1" 
                        value={quantidade} 
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                        style={{ width: "70px" }}
                        placeholder="Qtd"
                    />
                </div>

                {/* Se o produto permitir frações, mostra a seleção de sabores */}
                {produtoAtual && produtoAtual.maxFracoes > 1 && (
                    <div style={{ marginTop: "10px", padding: "10px", background: "#f9f9f9", border: "1px solid #ddd" }}>
                        <p><strong>Montagem de Sabores (Máx: {produtoAtual.maxFracoes} frações)</strong></p>
                        <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>
                            <select id="select-sabor-add" style={{ flex: 1 }}>
                                <option value="">Escolher sabor...</option>
                                {saboresDisponiveis.map(sab => (
                                    <option key={sab.id} value={sab.id}>{sab.nome} — R$ {sab.preco.toFixed(2)}</option>
                                ))}
                            </select>
                            <button 
                                type="button" 
                                className="formulario__botao-secundario"
                                onClick={() => {
                                    const selectEl = document.getElementById("select-sabor-add") as HTMLSelectElement;
                                    if (selectEl?.value) handleAdicionarSaborFracao(selectEl.value);
                                }}
                            >
                                Adicionar Sabor
                            </button>
                        </div>

                        <ul>
                            {saboresEscolhidos.map((f, idx) => {
                                const saborObj = saboresDisponiveis.find(s => s.id === f.saborId);
                                return (
                                    <li key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                                        <span>{(f.fracao * 100)}% - {saborObj?.nome}</span>
                                        <button type="button" onClick={() => removerSaborFracao(idx)} style={{ color: "red" }}>Remover</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                <div style={{ marginTop: "10px" }}>
                    <input 
                        type="text" 
                        placeholder="Observação do item (ex: sem cebola)" 
                        value={obsItem} 
                        onChange={(e) => setObsItem(e.target.value)} 
                        style={{ width: "100%", marginBottom: "10px" }}
                    />
                    <button type="button" className="formulario__botao-secundario" onClick={adicionarItemAoPedido} style={{ width: "100%" }}>
                        Adicionar ao Carrinho do Pedido
                    </button>
                </div>

                {/* Lista de Itens do Pedido */}
                <ul className="formulario__lista" style={{ marginTop: "15px" }}>
                    {itens.map((item, index) => (
                        <li key={index} style={{ marginBottom: "8px", borderBottom: "1px solid #eee", paddingBottom: "5px" }}>
                            <strong>{item.quantidade}x {item.nome}</strong> — R$ {(item.precoCalculado * item.quantidade).toFixed(2)}
                            {item.saboresFracoes && (
                                <ul style={{ fontSize: "12px", color: "#666", paddingLeft: "15px" }}>
                                    {item.saboresFracoes.map((sf, i) => (
                                        <li key={i}>{sf.fracao * 100}% {sf.nome}</li>
                                    ))}
                                </ul>
                            )}
                            <button type="button" onClick={() => removerItem(index)} style={{ color: "red", float: "right" }}>X</button>
                        </li>
                    ))}
                </ul>

                {itens.length > 0 && (
                    <div style={{ fontWeight: "bold", fontSize: "16px", marginTop: "10px" }}>
                        Valor Total do Pedido: R$ {valorTotal.toFixed(2)}
                    </div>
                )}
            </div>

            <hr />

            <textarea 
                placeholder="Observações gerais do pedido..." 
                value={observacoesGerais} 
                onChange={(e) => setObservacoesGerais(e.target.value)} 
                rows={2}
            />

            <button type="submit" className="formulario__botao" disabled={carregando} style={{ marginTop: "15px" }}>
                {carregando ? "A processar..." : "🚀 Finalizar Pedido"}
            </button>
        </form>
        </div>
    );
}