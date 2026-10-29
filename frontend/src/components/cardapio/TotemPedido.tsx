import { useState } from "react";
import type { ProdutoCardapio, SaborCardapio } from "../../types/cardapio";
import type { ItemPedido, NovoPedidoDTO, SaborFracaoDTO } from "../../types/pedido";
import "../../css/formulario.css"; // Podes criar um totem.css depois se preferir

type TotemPedidoProps = {
    produtosDisponiveis: ProdutoCardapio[];
    saboresDisponiveis: SaborCardapio[];
    aoSalvar: (dados: NovoPedidoDTO) => void;
    carregando: boolean;
};

export function TotemPedido({ produtosDisponiveis, saboresDisponiveis, aoSalvar, carregando }: TotemPedidoProps) {
    // Etapas: 'produto' -> 'sabores' -> 'cliente'
    const [etapa, setEtapa] = useState<'produto' | 'sabores' | 'cliente'>('produto');
    
    // Dados do item em montagem
    const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoCardapio | null>(null);
    const [saboresEscolhidos, setSaboresEscolhidos] = useState<SaborCardapio[]>([]);
    const [obsItem, setObsItem] = useState("");

    // Carrinho de itens montados
    const [itens, setItens] = useState<ItemPedido[]>([]);

    // Dados finais do cliente
    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");

    // 1. Quando clica num produto base
    function selecionarProduto(prod: ProdutoCardapio) {
        setProdutoSelecionado(prod);
        setSaboresEscolhidos([]);
        setObsItem("");

        // Se o produto aceitar frações (ex: pizza), vai para a etapa de escolher sabores
        // Senão, se for bebida/outro, já adiciona direto ou vai para observação
        if (prod.maxFracoes && prod.maxFracoes > 1) {
            setEtapa('sabores');
        } else {
            // Adiciona direto se não precisar de sabores
            adicionarItemDireto(prod, []);
        }
    }

    // 2. Quando clica num sabor no modo totem
    function selecionarSabor(sabor: SaborCardapio) {
        if (!produtoSelecionado) return;
        const max = produtoSelecionado.maxFracoes || 1;

        if (saboresEscolhidos.length >= max) {
            alert(`Este produto aceita no máximo ${max} sabores.`);
            return;
        }

        const novaLista = [...saboresEscolhidos, sabor];
        setSaboresEscolhidos(novaLista);

        // Se atingiu o limite de frações, já fecha o item ou permite avançar
        if (novaLista.length === max) {
            concluirMontagemItem(novaLista);
        }
    }

    function concluirMontagemItem(saboresFinais: SaborCardapio[]) {
        if (!produtoSelecionado) return;

        const totalSabores = saboresFinais.length || 1;
        const fracaoCada = 1 / totalSabores;

        let precoSaborMaisCaro = 0;
        const fracoesFormatadas: SaborFracaoDTO[] = saboresFinais.map(s => {
            if (s.preco > precoSaborMaisCaro) precoSaborMaisCaro = s.preco;
            return {
                saborId: s.id,
                nome: s.nome,
                fracao: fracaoCada,
                preco: s.preco
            };
        });

        const precoCalculado = (produtoSelecionado.precoBase || 0) + precoSaborMaisCaro;

        const novoItem: ItemPedido = {
            produtoId: produtoSelecionado.id,
            nome: produtoSelecionado.nome,
            quantidade: 1,
            precoCalculado,
            saboresFracoes: fracoesFormatadas.length > 0 ? fracoesFormatadas : undefined,
            observacao: obsItem.trim() || undefined
        };

        setItens([...itens, novoItem]);
        setEtapa('produto'); // Volta para o início para o próximo item
    }

    function adicionarItemDireto(prod: ProdutoCardapio, sabores: SaborFracaoDTO[]) {
        const precoCalculado = prod.precoBase || 0;
        const novoItem: ItemPedido = {
            produtoId: prod.id,
            nome: prod.nome,
            quantidade: 1,
            precoCalculado,
            saboresFracoes: sabores.length > 0 ? sabores : undefined
        };
        setItens([...itens, novoItem]);
        setEtapa('produto');
    }

    const valorTotal = itens.reduce((acc, item) => acc + (item.precoCalculado * item.quantidade), 0);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2>🖥️ Modo Totem / Autoatendimento</h2>

            {/* ETAPA 1: ESCOLHER PRODUTO BASE */}
            {etapa === 'produto' && (
                <div>
                    <h3>1. Escolha o Produto / Categoria:</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '10px' }}>
                        {produtosDisponiveis.map(prod => (
                            <button
                                key={prod.id}
                                onClick={() => selecionarProduto(prod)}
                                style={{ padding: '16px', background: '#f8f9fa', border: '1px solid #ced4da', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <strong>{prod.nome}</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#2b8a3e', fontWeight: 'bold' }}>R$ {prod.precoBase.toFixed(2)}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ETAPA 2: ESCOLHER SABORES (SE FOR PIZZA/FRACIONADO) */}
            {etapa === 'sabores' && produtoSelecionado && (
                <div>
                    <button onClick={() => setEtapa('produto')} style={{ marginBottom: '10px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
                        ⬅ Voltar aos Produtos
                    </button>
                    <h3>2. Escolha os Sabores ({saboresEscolhidos.length}/{produtoSelecionado.maxFracoes}):</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '10px' }}>
                        {saboresDisponiveis.map(sab => (
                            <button
                                key={sab.id}
                                onClick={() => selecionarSabor(sab)}
                                style={{ padding: '14px', background: '#e7f5ff', border: '1px solid #74c0fc', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <strong>{sab.nome}</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#1864ab' }}>R$ {sab.preco.toFixed(2)}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* CARRINHO / ITENS SELECIONADOS */}
            <div style={{ marginTop: '20px', borderTop: '2px solid #eee', paddingTop: '15px' }}>
                <h4>🛒 Carrinho Atual ({itens.length} itens)</h4>
                {itens.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f3f5' }}>
                        <span>{item.quantidade}x {item.nome}</span>
                        <span>R$ {(item.precoCalculado * item.quantidade).toFixed(2)}</span>
                    </div>
                ))}
                {itens.length > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
                        <span>Total:</span>
                        <span style={{ color: '#2b8a3e' }}>R$ {valorTotal.toFixed(2)}</span>
                    </div>
                )}
            </div>
        </div>
    );
}