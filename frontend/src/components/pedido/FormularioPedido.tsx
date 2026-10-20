import { useState, type FormEvent } from "react";
import type { ProdutoCardapio } from "../../types/cardapio";
import type { ItemPedido, NovoPedidoDTO } from "../../types/pedido";

type FormularioPedidoProps = {
    produtosDisponiveis: ProdutoCardapio[];
    aoSalvar: (dados: NovoPedidoDTO) => void;
    carregando: boolean;
};

export function FormularioPedido({ produtosDisponiveis = [], aoSalvar, carregando }: FormularioPedidoProps) {
    // Dados do Cliente
    const [telefone, setTelefone] = useState("");
    const [clienteNome, setClienteNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [observacoesGerais, setObservacoesGerais] = useState("");
    
    const [itens, setItens] = useState<ItemPedido[]>([]);

    // Estados temporários para adicionar um produto na lista do pedido
    const [produtoSelecionadoId, setProdutoSelecionadoId] = useState<number | "">("");
    const [quantidade, setQuantidade] = useState<number | "">(1);
    const [obsItem, setObsItem] = useState("");

    // Agrupa os produtos disponíveis por categoria dinamicamente
    const produtosPorCategoria = produtosDisponiveis.reduce((acc, produto) => {
        const cat = produto.categoria || "Geral";
        if (!acc[cat]) {
            acc[cat] = [];
        }
        acc[cat].push(produto);
        return acc;
    }, {} as Record<string, ProdutoCardapio[]>);

    function adicionarItem() {
        if (!produtoSelecionadoId || !quantidade || Number(quantidade) <= 0) return;

        const produtoInfo = produtosDisponiveis.find(p => p.id === Number(produtoSelecionadoId));
        if (!produtoInfo) return;

        const novoItem: ItemPedido = {
            produtoId: produtoInfo.id,
            nome: produtoInfo.nome,
            quantidade: Number(quantidade),
            precoUnitario: produtoInfo.preco,
            observacao: obsItem.trim() || undefined
        };

        setItens([...itens, novoItem]);

        // Reseta os campos temporários do item
        setProdutoSelecionadoId("");
        setQuantidade(1);
        setObsItem("");
    }

    // Remove um item da lista pelo índice
    function removerItem(index: number) {
        setItens(itens.filter((_, i) => i !== index));
    }

    // Calcula o valor total dinamicamente
    const valorTotal = itens.reduce((acc, item) => acc + (item.precoUnitario * item.quantidade), 0);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (itens.length === 0) {
            alert("Adicione pelo menos um produto ao pedido.");
            return;
        }

        aoSalvar({
            cliente: {
                telefone,
                nome: clienteNome,
                endereco
            },
            pedido: itens,
            observacoes: observacoesGerais.trim() || undefined,
            valorTotal
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px" }}>
            <h3>📝 Novo Pedido (Balcão / Telefone)</h3>

            {/* Seção: Dados do Cliente */}
            <div>
                <h4>Dados do Cliente</h4>
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <input 
                        type="text" 
                        placeholder="Telefone (WhatsApp)" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required 
                        style={{ flex: 1 }}
                    />
                    <input 
                        type="text" 
                        placeholder="Nome do Cliente" 
                        value={clienteNome} 
                        onChange={(e) => setClienteNome(e.target.value)} 
                        required 
                        style={{ flex: 1 }}
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Endereço de Entrega Completo" 
                    value={endereco} 
                    onChange={(e) => setEndereco(e.target.value)} 
                    required 
                    style={{ width: "100%" }}
                />
            </div>

            <hr />

            {/* Seção: Adicionar Produtos ao Pedido por Categoria */}
            <div>
                <h4>Itens do Pedido</h4>
                <div style={{ display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
                    
                    {/* Select com Optgroup separando por Categoria */}
                    <select 
                        value={produtoSelecionadoId} 
                        onChange={(e) => setProdutoSelecionadoId(e.target.value === "" ? "" : Number(e.target.value))}
                        style={{ flex: 2, minWidth: "200px" }}
                    >
                        <option value="">Selecione um produto...</option>
                        {Object.entries(produtosPorCategoria).map(([categoria, produtosDaCat]) => (
                            <optgroup key={categoria} label={`📂 ${categoria}`}>
                                {produtosDaCat.map(produto => (
                                    <option key={produto.id} value={produto.id}>
                                        {produto.nome} — R$ {produto.preco.toFixed(2)}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>

                    <input 
                        type="number" 
                        min="1" 
                        placeholder="Qtd" 
                        value={quantidade} 
                        onChange={(e) => setQuantidade(e.target.value === "" ? "" : Number(e.target.value))}
                        style={{ width: "70px" }}
                    />

                    <input 
                        type="text" 
                        placeholder="Obs (ex: sem cebola)" 
                        value={obsItem} 
                        onChange={(e) => setObsItem(e.target.value)} 
                        style={{ flex: 1, minWidth: "120px" }}
                    />

                    <button type="button" onClick={adicionarItem}>Adicionar</button>
                </div>

                {/* Lista de itens adicionados */}
                <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                    {itens.map((item, index) => (
                        <li key={index} style={{ marginBottom: "5px" }}>
                            <strong>{item.quantidade}x {item.nome}</strong> — R$ {(item.precoUnitario * item.quantidade).toFixed(2)}
                            {item.observacao && <span style={{ color: "red", fontSize: "12px" }}> ({item.observacao})</span>}
                            <button type="button" onClick={() => removerItem(index)} style={{ marginLeft: "10px", color: "red", border: "none", background: "none", cursor: "pointer" }}>✕</button>
                        </li>
                    ))}
                    {itens.length === 0 && <p style={{ color: "#777", fontStyle: "italic" }}>Nenhum item adicionado ainda.</p>}
                </ul>

                {itens.length > 0 && (
                    <div style={{ fontWeight: "bold", fontSize: "16px", marginTop: "8px" }}>
                        Valor Total: R$ {valorTotal.toFixed(2)}
                    </div>
                )}
            </div>

            <hr />

            {/* Observações gerais */}
            <textarea 
                placeholder="Observações gerais do pedido (ex: campainha não toca, troco para R$ 50)..." 
                value={observacoesGerais} 
                onChange={(e) => setObservacoesGerais(e.target.value)} 
                rows={2}
            />

            <button type="submit" disabled={carregando} style={{ padding: "10px", fontWeight: "bold", background: "#28a745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                {carregando ? "Salvando Pedido..." : "🚀 Finalizar e Lançar Pedido"}
            </button>
        </form>
    );
}