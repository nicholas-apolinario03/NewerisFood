import { useState, type FormEvent, useEffect } from "react";
import type { ProdutoCardapio, SaborCardapio } from "../../types/cardapio";
import type { ItemPedido, NovoPedidoDTO, SaborFracaoDTO } from "../../types/pedido";
import "../../css/formulario.css";

type FormularioPedidoProps = {
    produtosDisponiveis: ProdutoCardapio[];
    saboresDisponiveis: SaborCardapio[];
    aoSalvar: (dados: NovoPedidoDTO) => void;
    carregando: boolean;
};

export function FormularioPedido({ produtosDisponiveis = [], saboresDisponiveis = [], aoSalvar, carregando }: FormularioPedidoProps) {
    const [telefone, setTelefone] = useState("");
    const [clienteNome, setClienteNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoesGerais, setObservacoesGerais] = useState("");
    
    const [itens, setItens] = useState<ItemPedido[]>([]);

    const [produtoSelecionadoId, setProdutoSelecionadoId] = useState<string>("");
    const [quantidade, setQuantidade] = useState<number>(1);
    const [obsItem, setObsItem] = useState("");
    
    // Lista apenas com os IDs dos sabores escolhidos
    const [saboresIdsEscolhidos, setSaboresIdsEscolhidos] = useState<string[]>([]);

    const produtoAtual = produtosDisponiveis.find(p => p.id === produtoSelecionadoId);

    useEffect(() => {
        setSaboresIdsEscolhidos([]);
    }, [produtoSelecionadoId]);

    // Função que adiciona o sabor e recalcula as frações de forma igualitária (ex: 1 sabor = 100%, 2 sabores = 50% cada)
    function handleAdicionarSabor(saborId: string) {
        if (!produtoAtual) return;
        const max = produtoAtual.maxFracoes || 1;

        if (saboresIdsEscolhidos.length >= max) {
            alert(`Este produto permite no máximo ${max} sabores/frações.`);
            return;
        }

        if (saboresIdsEscolhidos.includes(saborId)) {
            alert("Este sabor já foi adicionado.");
            return;
        }

        const novaLista = [...saboresIdsEscolhidos, saborId];
        setSaboresIdsEscolhidos(novaLista);
    }

    function removerSabor(index: number) {
        setSaboresIdsEscolhidos(saboresIdsEscolhidos.filter((_, i) => i !== index));
    }

    function adicionarItemAoPedido() {
        if (!produtoAtual) return;

        if (produtoAtual.maxFracoes > 1 && saboresIdsEscolhidos.length === 0) {
            alert("Selecione pelo menos um sabor para este produto.");
            return;
        }

        // Recalcula a fração exata dividida pelo total de sabores escolhidos
        const totalSabores = saboresIdsEscolhidos.length || 1;
        const fracaoCada = 1 / totalSabores;

        let precoSaborMaisCaro = 0;
        const fracoesFormatadas: SaborFracaoDTO[] = saboresIdsEscolhidos.map(saborId => {
            const saborInfo = saboresDisponiveis.find(s => s.id === saborId);
            const precoSabor = saborInfo?.preco || 0;
            if (precoSabor > precoSaborMaisCaro) {
                precoSaborMaisCaro = precoSabor;
            }
            return {
                saborId: saborId,
                nome: saborInfo?.nome || "Sabor",
                fracao: fracaoCada,
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

        // Reseta os campos do item atual
        setProdutoSelecionadoId("");
        setQuantidade(1);
        setSaboresIdsEscolhidos([]);
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
                <p>Atendimento com divisão automática de frações</p>
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
                                {prod.nome} (Base: R$ {prod.precoBase.toFixed(2)} — Máx. {prod.maxFracoes} sabores)
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

                {/* Se o produto permitir frações, mostra a divisão automática */}
                {produtoAtual && produtoAtual.maxFracoes > 1 && (
                    <div style={{ marginTop: "10px", padding: "10px", background: "#f9f9f9", border: "1px solid #ddd", borderRadius: "6px" }}>
                        <p style={{ margin: "0 0 6px 0" }}><strong>Montagem de Sabores (Divisão Automática)</strong></p>
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
                                    if (selectEl?.value) {
                                        handleAdicionarSabor(selectEl.value);
                                        selectEl.value = "";
                                    }
                                }}
                            >
                                Adicionar Sabor
                            </button>
                        </div>

                        <ul style={{ paddingLeft: "15px", margin: 0 }}>
                            {saboresIdsEscolhidos.map((saborId, idx) => {
                                const saborObj = saboresDisponiveis.find(s => s.id === saborId);
                                const total = saboresIdsEscolhidos.length || 1;
                                const porcentagem = (1 / total) * 100;
                                return (
                                    <li key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "13px" }}>
                                        <span><strong>{porcentagem.toFixed(0)}%</strong> — {saborObj?.nome}</span>
                                        <button type="button" onClick={() => removerSabor(idx)} style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}>Remover</button>
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
                                <ul style={{ fontSize: "12px", color: "#666", paddingLeft: "15px", margin: "2px 0 0 0" }}>
                                    {item.saboresFracoes.map((sf, i) => (
                                        <li key={i}>{Math.round(sf.fracao * 100)}% {sf.nome}</li>
                                    ))}
                                </ul>
                            )}
                            <button type="button" onClick={() => removerItem(index)} style={{ color: "red", float: "right", background: "none", border: "none", cursor: "pointer" }}>X</button>
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