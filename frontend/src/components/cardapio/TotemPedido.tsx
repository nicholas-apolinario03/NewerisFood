import { useState } from "react";
import type { ProdutoCardapio, SaborCardapio } from "../../types/cardapio";
import type { ItemPedido, NovoPedidoDTO, SaborFracaoDTO } from "../../types/pedido";
import "../../css/formulario.css";

type TotemPedidoProps = {
    produtosDisponiveis: ProdutoCardapio[];
    saboresDisponiveis: SaborCardapio[];
    aoSalvar: (dados: NovoPedidoDTO) => void;
    carregando: boolean;
};

export function TotemPedido({ produtosDisponiveis = [], saboresDisponiveis = [], aoSalvar, carregando }: TotemPedidoProps) {
    const [etapa, setEtapa] = useState<'categoria' | 'produto' | 'sabores' | 'cliente'>('categoria');
    
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
    const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoCardapio | null>(null);
    
    // Lista de IDs dos sabores escolhidos progressivamente (1 = 100%, 2 = 50% cada, etc.)
    const [saboresIdsEscolhidos, setSaboresIdsEscolhidos] = useState<string[]>([]);

    const [itens, setItens] = useState<ItemPedido[]>([]);

    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoesGerais, setObservacoesGerais] = useState("");

    const categoriasUnicas = Array.from(new Set(produtosDisponiveis.map(p => p.categoria))).filter(Boolean);

    function selecionarCategoria(cat: string) {
        setCategoriaSelecionada(cat);
        setEtapa('produto');
    }

    function selecionarProduto(prod: ProdutoCardapio) {
        setProdutoSelecionado(prod);
        setSaboresIdsEscolhidos([]);

        if (prod.maxFracoes && prod.maxFracoes > 1) {
            setEtapa('sabores');
        } else {
            // Bebidas ou itens sem frações adicionam direto
            adicionarItemAoCarrinhoDireto(prod);
            setEtapa('categoria');
        }
    }

    // Adiciona o sabor progressivamente e recalcula as frações automaticamente
    function handleAdicionarSaborTotem(saborId: string) {
        if (!produtoSelecionado) return;
        const max = produtoSelecionado.maxFracoes || 1;

        if (saboresIdsEscolhidos.length >= max) {
            alert(`Este produto aceita no máximo ${max} sabores.`);
            return;
        }

        if (saboresIdsEscolhidos.includes(saborId)) {
            alert("Este sabor já foi adicionado.");
            return;
        }

        setSaboresIdsEscolhidos([...saboresIdsEscolhidos, saborId]);
    }

    function removerSaborTotem(index: number) {
        setSaboresIdsEscolhidos(saboresIdsEscolhidos.filter((_, i) => i !== index));
    }

    function confirmarSaboresEAdicionar() {
        if (!produtoSelecionado) return;

        if (produtoSelecionado.maxFracoes > 1 && saboresIdsEscolhidos.length === 0) {
            alert("Selecione pelo menos um sabor.");
            return;
        }

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

        const precoCalculado = (produtoSelecionado.precoBase || 0) + precoSaborMaisCaro;

        const novoItem: ItemPedido = {
            produtoId: produtoSelecionado.id,
            nome: produtoSelecionado.nome,
            quantidade: 1,
            precoCalculado,
            saboresFracoes: fracoesFormatadas.length > 0 ? fracoesFormatadas : undefined
        };

        setItens([...itens, novoItem]);
        setSaboresIdsEscolhidos([]);
        setEtapa('categoria');
    }

    function adicionarItemAoCarrinhoDireto(prod: ProdutoCardapio) {
        const novoItem: ItemPedido = {
            produtoId: prod.id,
            nome: prod.nome,
            quantidade: 1,
            precoCalculado: prod.precoBase || 0
        };
        setItens([...itens, novoItem]);
    }

    function removerItemCarrinho(index: number) {
        setItens(itens.filter((_, i) => i !== index));
    }

    const valorTotal = itens.reduce((acc, item) => acc + (item.precoCalculado * item.quantidade), 0);

    function avancarParaCliente() {
        if (itens.length === 0) {
            alert("O seu carrinho está vazio.");
            return;
        }
        setEtapa('cliente');
    }

    function finalizarPedidoTotem(e: React.FormEvent) {
        e.preventDefault();
        aoSalvar({
            cliente: { telefone, nome, endereco },
            pedido: itens,
            observacoes: observacoesGerais.trim() || undefined,
            valorTotal
        });
    }

    const produtosDaCategoria = produtosDisponiveis.filter(p => p.categoria === categoriaSelecionada);

    return (
        <div style={{ maxWidth: '850px', margin: '0 auto', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
            
            {/* ETAPA 1: ESCOLHER CATEGORIA */}
            {etapa === 'categoria' && (
                <div>
                    <h3>1. O que gostaria de pedir hoje?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '15px' }}>
                        {categoriasUnicas.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => selecionarCategoria(cat)}
                                style={{ padding: '20px 10px', background: '#f8f9fa', border: '2px solid #e9ecef', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: '#333' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ETAPA 2: ESCOLHER PRODUTO DA CATEGORIA */}
            {etapa === 'produto' && (
                <div>
                    <button onClick={() => setEtapa('categoria')} style={{ marginBottom: '12px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>
                        ⬅ Voltar para Categorias
                    </button>
                    <h3>2. Escolha o item ({categoriaSelecionada}):</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '15px' }}>
                        {produtosDaCategoria.map(prod => (
                            <button
                                key={prod.id}
                                onClick={() => selecionarProduto(prod)}
                                style={{ padding: '16px', background: '#ffffff', border: '1px solid #ced4da', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <strong style={{ fontSize: '15px' }}>{prod.nome}</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#2b8a3e', fontWeight: 'bold' }}>R$ {prod.precoBase.toFixed(2)}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ETAPA 3: ESCOLHER SABORES PROGRESSIVAMENTE (COM DIVISÃO AUTOMÁTICA) */}
            {etapa === 'sabores' && produtoSelecionado && (
                <div>
                    <button onClick={() => setEtapa('produto')} style={{ marginBottom: '12px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>
                        ⬅ Voltar aos Tamanhos
                    </button>
                    <h3>3. Monte os Sabores ({saboresIdsEscolhidos.length}/{produtoSelecionado.maxFracoes}):</h3>
                    <p style={{ fontSize: '13px', color: '#666' }}>O valor divide-se automaticamente conforme seleciona os sabores.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '15px' }}>
                        {saboresDisponiveis.map(sab => (
                            <button
                                key={sab.id}
                                type="button"
                                onClick={() => handleAdicionarSaborTotem(sab.id)}
                                style={{ padding: '14px', background: '#e7f5ff', border: '1px solid #74c0fc', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <strong>{sab.nome}</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#1864ab' }}>R$ {sab.preco.toFixed(2)}</p>
                            </button>
                        ))}
                    </div>

                    {/* Exibe os sabores já selecionados com suas porcentagens dinâmicas */}
                    {saboresIdsEscolhidos.length > 0 && (
                        <div style={{ marginTop: '20px', background: '#f8f9fa', padding: '12px', borderRadius: '8px', border: '1px solid #ced4da' }}>
                            <h4>Sabores Escolhidos para este item:</h4>
                            <ul style={{ paddingLeft: '15px', margin: '5px 0' }}>
                                {saboresIdsEscolhidos.map((saborId, idx) => {
                                    const saborObj = saboresDisponiveis.find(s => s.id === saborId);
                                    const total = saboresIdsEscolhidos.length || 1;
                                    const porcentagem = (1 / total) * 100;
                                    return (
                                        <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '14px' }}>
                                            <span><strong>{porcentagem.toFixed(0)}%</strong> — {saborObj?.nome}</span>
                                            <button type="button" onClick={() => removerSaborTotem(idx)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remover</button>
                                        </li>
                                    );
                                })}
                            </ul>

                            <button 
                                type="button" 
                                onClick={confirmarSaboresEAdicionar}
                                style={{ marginTop: '10px', width: '100%', padding: '10px', background: '#2b8a3e', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                ✅ Adicionar Item ao Carrinho
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* ETAPA 4: DADOS DO CLIENTE E FINALIZAÇÃO */}
            {etapa === 'cliente' && (
                <form onSubmit={finalizarPedidoTotem}>
                    <button type="button" onClick={() => setEtapa('categoria')} style={{ marginBottom: '12px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>
                        ⬅ Voltar ao Cardápio
                    </button>
                    <h3>4. Identificação do Cliente</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                        <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                        <input type="text" placeholder="Endereço de Entrega" value={endereco} onChange={(e) => setEndereco(e.target.value)} required style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                        <textarea placeholder="Observações gerais..." value={observacoesGerais} onChange={(e) => setObservacoesGerais(e.target.value)} rows={2} style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }} />
                        
                        <button type="submit" disabled={carregando} className="formulario__botao" style={{ marginTop: '10px', padding: '12px', background: '#2b8a3e', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                            {carregando ? "A processar..." : "🚀 Confirmar e Enviar Pedido"}
                        </button>
                    </div>
                </form>
            )}

            {/* RESUMO DO CARRINHO */}
            {itens.length > 0 && etapa !== 'cliente' && (
                <div style={{ marginTop: '30px', borderTop: '2px dashed #dee2e6', paddingTop: '15px' }}>
                    <h4>🛒 Carrinho Atual ({itens.length} itens)</h4>
                    {itens.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f1f3f5', fontSize: '14px' }}>
                            <span>
                                {item.quantidade}x <strong>{item.nome}</strong>
                                {item.saboresFracoes && (
                                    <span style={{ fontSize: '12px', color: '#666', display: 'block' }}>
                                        {item.saboresFracoes.map(f => `${Math.round(f.fracao * 100)}% ${f.nome}`).join(' / ')}
                                    </span>
                                )}
                            </span>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <strong>R$ {(item.precoCalculado * item.quantidade).toFixed(2)}</strong>
                                <button type="button" onClick={() => removerItemCarrinho(idx)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total: <span style={{ color: '#2b8a3e' }}>R$ {valorTotal.toFixed(2)}</span></span>
                        <button type="button" onClick={avancarParaCliente} style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                            Avançar para Pagamento/Cliente ➔
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}