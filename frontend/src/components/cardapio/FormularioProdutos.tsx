import { useState, useEffect, type FormEvent } from "react";
import type { ProdutoCardapio, NovoProdutoDTO, ItemReceitaDTO } from "../../types/cardapio";
import type { Insumo } from "../../types/estoque";
import "../../css/formulario.css";

type FormularioProdutoProps = {
    produto?: ProdutoCardapio;
    insumosDisponiveis?: Insumo[];
    categorias?: string[];
    aoSalvar: (dados: NovoProdutoDTO) => void;
    carregando: boolean;
};

export function FormularioProduto({ produto, insumosDisponiveis = [], categorias = [], aoSalvar, carregando }: FormularioProdutoProps) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [precoBase, setPrecoBase] = useState<number | "">(""); // Corrigido de 'preco' para 'precoBase'
    const [maxFracoes, setMaxFracoes] = useState<number>(1);
    const [permiteFracionamento, setPermiteFracionamento] = useState<boolean>(true);
    const [categoria, setCategoria] = useState("");
    const [novaCategoria, setNovaCategoria] = useState("");
    const [criandoNovaCat, setCriandoNovaCat] = useState(false);
    const [disponivel, setDisponivel] = useState(true);

    const [ingredientes, setIngredientes] = useState<ItemReceitaDTO[]>([]);
    const [insumoSelecionadoId, setInsumoSelecionadoId] = useState<number>(0);
    const [quantidadeGasta, setQuantidadeGasta] = useState<number | "">("");

    useEffect(() => {
        if (produto) {
            setNome(produto.nome || "");
            setDescricao(produto.descricao || "");
            setPrecoBase(produto.precoBase ?? ""); // Corrigido
            setMaxFracoes(produto.maxFracoes ?? 1);
            setPermiteFracionamento(produto.permiteFracionamento ?? true);
            setCategoria(produto.categoria || "");
            setDisponivel(produto.disponivel ?? true);
            setIngredientes(produto.ingredientes || []);
            
            if (produto.categoria && !categorias.includes(produto.categoria)) {
                setCriandoNovaCat(true);
                setNovaCategoria(produto.categoria);
            }
        }
    }, [produto, categorias]);

    function adicionarIngrediente() {
        if (!insumoSelecionadoId || !quantidadeGasta) return;

        const jaExiste = ingredientes.some(item => item.insumoId === insumoSelecionadoId);
        if (jaExiste) {
            alert("Este insumo já foi adicionado à receita.");
            return;
        }

        setIngredientes([...ingredientes, { insumoId: insumoSelecionadoId, quantidadeGasta: Number(quantidadeGasta) }]);
        setInsumoSelecionadoId(0);
        setQuantidadeGasta("");
    }

    function removerIngrediente(insumoId: number) {
        setIngredientes(ingredientes.filter(item => item.insumoId !== insumoId));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        
        const categoriaFinal = criandoNovaCat ? novaCategoria.trim() : categoria;

        if (!categoriaFinal) {
            alert("Por favor, selecione ou informe uma categoria.");
            return;
        }

        aoSalvar({
            nome,
            descricao,
            precoBase: Number(precoBase) || 0, // Corrigido
            maxFracoes: Number(maxFracoes) || 1,
            permiteFracionamento,
            categoria: categoriaFinal,
            disponivel,
            ingredientes
        });
    }

    return (
        <div className="pagina-login">
        <form onSubmit={handleSubmit} className="formulario formulario--amplo">
            <header className="formulario__cabecalho">
                <h1>{produto ? "Editar produto base" : "Cadastrar produto base"}</h1>
                <p>Preencha os dados estruturais e regras de fracionamento do produto.</p>
            </header>
            
            <div className="formulario__campo">
                <label htmlFor="produto-nome">Nome do Produto Base</label>
                <input
                    id="produto-nome"
                    type="text"
                    placeholder="Ex: Pizza Grande, Pizza Família"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>

            <div className="formulario__campo">
                <label htmlFor="produto-descricao">Descrição</label>
                <textarea
                    id="produto-descricao"
                    placeholder="Descrição da massa ou estrutura"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <div className="formulario__linha" style={{ display: "flex", gap: "10px" }}>
                <div className="formulario__campo" style={{ flex: 1 }}>
                    <label htmlFor="produto-preco">Preço Base (Massa/Borda)</label>
                    <input
                        id="produto-preco"
                        type="number"
                        step="0.01"
                        placeholder="Ex: 20.00"
                        value={precoBase}
                        onChange={(e) => setPrecoBase(e.target.value === "" ? "" : Number(e.target.value))}
                        required
                    />
                </div>

                <div className="formulario__campo" style={{ flex: 1 }}>
                    <label htmlFor="max-fracoes">Máximo de Frações (Sabores)</label>
                    <input
                        id="max-fracoes"
                        type="number"
                        min="1"
                        max="4"
                        value={maxFracoes}
                        onChange={(e) => setMaxFracoes(Number(e.target.value))}
                        required
                    />
                </div>
            </div>

            <label className="formulario__checkbox">
                <input
                    type="checkbox"
                    checked={permiteFracionamento}
                    onChange={(e) => setPermiteFracionamento(e.target.checked)}
                />
                Permite divisão de sabores (Fracionamento)
            </label>

            {/* Campo de Seleção / Criação de Categoria */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                <label htmlFor="produto-categoria">Categoria:</label>
                {!criandoNovaCat ? (
                    <select
                        id="produto-categoria"
                        value={categoria}
                        onChange={(e) => {
                            if (e.target.value === "__NOVA__") {
                                setCriandoNovaCat(true);
                                setCategoria("");
                            } else {
                                setCategoria(e.target.value);
                            }
                        }}
                        required
                    >
                        <option value="">Selecione uma categoria...</option>
                        {categorias.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                        <option value="__NOVA__">➕ Criar nova categoria...</option>
                    </select>
                ) : (
                    <div style={{ display: "flex", gap: "8px" }}>
                        <input
                            type="text"
                            placeholder="Nome da nova categoria"
                            value={novaCategoria}
                            onChange={(e) => setNovaCategoria(e.target.value)}
                            required
                            autoFocus
                            style={{ flex: 1 }}
                        />
                        {categorias.length > 0 && (
                            <button 
                                type="button" 
                                onClick={() => {
                                    setCriandoNovaCat(false);
                                    setNovaCategoria("");
                                }}
                                style={{ padding: "0 8px", fontSize: "12px" }}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                )}
            </div>

            <label className="formulario__checkbox" style={{ marginTop: "10px" }}>
                <input
                    type="checkbox"
                    checked={disponivel}
                    onChange={(e) => setDisponivel(e.target.checked)}
                />
                Produto disponível para venda
            </label>

            <hr />

            {/* Ficha Técnica / Insumos Base */}
            <div>
                <h4>Insumos Base / Embalagem (Ficha Técnica)</h4>
                <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                    <select
                        value={insumoSelecionadoId}
                        onChange={(e) => setInsumoSelecionadoId(Number(e.target.value))}
                    >
                        <option value={0}>Selecione um insumo (ex: Caixa, Farinha)...</option>
                        {insumosDisponiveis.map(insumo => (
                            <option key={insumo.id} value={insumo.id}>
                                {insumo.nome} ({insumo.unidadeMedida})
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        placeholder="Qtd gasta"
                        value={quantidadeGasta}
                        onChange={(e) => setQuantidadeGasta(e.target.value === "" ? "" : Number(e.target.value))}
                        style={{ width: "100px" }}
                    />

                    <button type="button" className="formulario__botao-secundario" onClick={adicionarIngrediente}>Adicionar</button>
                </div>

                <ul className="formulario__lista">
                    {ingredientes.map(item => {
                        const insumoInfo = insumosDisponiveis.find(i => i.id === item.insumoId);
                        return (
                            <li key={item.insumoId}>
                                {insumoInfo ? insumoInfo.nome : `Insumo ID ${item.insumoId}`} — {item.quantidadeGasta} {insumoInfo?.unidadeMedida}
                                <button type="button" onClick={() => removerIngrediente(item.insumoId)} style={{ marginLeft: "10px", color: "red" }}>X</button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <button type="submit" className="formulario__botao" disabled={carregando} style={{ marginTop: "15px" }}>
                {carregando ? "Salvando..." : (produto ? "Salvar Alterações" : "Cadastrar Produto Base")}
            </button>
        </form>
        </div>
    );
}