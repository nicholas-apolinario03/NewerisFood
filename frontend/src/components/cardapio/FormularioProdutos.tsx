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
    const [preco, setPreco] = useState<number | "">("");
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
            setPreco(produto.preco ?? "");
            setCategoria(produto.categoria || "");
            setDisponivel(produto.disponivel ?? true);
            setIngredientes(produto.ingredientes || []);
            
            // Se a categoria do produto não estiver na lista de categorias conhecidas
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
        
        // Define qual categoria será enviada (a selecionada ou a nova digitada)
        const categoriaFinal = criandoNovaCat ? novaCategoria.trim() : categoria;

        if (!categoriaFinal) {
            alert("Por favor, selecione ou informe uma categoria.");
            return;
        }

        aoSalvar({
            nome,
            descricao,
            preco: Number(preco) || 0,
            categoria: categoriaFinal,
            disponivel,
            ingredientes
        });
    }

    return (
        <div className="pagina-login">
        <form onSubmit={handleSubmit} className="formulario formulario--amplo">
            <header className="formulario__cabecalho">
                <h1>{produto ? "Editar produto" : "Cadastrar produto"}</h1>
                <p>Preencha os dados e configure a ficha técnica do produto.</p>
            </header>
            <div className="formulario__campo">
            <label htmlFor="produto-nome">Nome do produto</label>
            <input
                id="produto-nome"
                type="text"
                placeholder="Nome do Produto (ex: Pizza Calabresa)"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            </div>

            <div className="formulario__campo">
            <label htmlFor="produto-descricao">Descrição</label>
            <textarea
                id="produto-descricao"
                placeholder="Descrição (ex: Molho, mussarela, calabresa e cebola)"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            </div>

            <div className="formulario__campo">
            <label htmlFor="produto-preco">Preço</label>
            <input
                id="produto-preco"
                type="number"
                step="0.01"
                placeholder="Preço (ex: 45.00)"
                value={preco}
                onChange={(e) => setPreco(e.target.value === "" ? "" : Number(e.target.value))}
                required
            />
            </div>

            {/* Campo de Seleção / Criação de Categoria */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
                            placeholder="Nome da nova categoria (ex: Lanches)"
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

            <label className="formulario__checkbox">
                <input
                    type="checkbox"
                    checked={disponivel}
                    onChange={(e) => setDisponivel(e.target.checked)}
                />
                Produto disponível para venda
            </label>

            <hr />

            {/* Ficha Técnica / Insumos */}
            <div>
                <h4>Ingredientes do Estoque (Ficha Técnica)</h4>
                <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
                    <select
                        value={insumoSelecionadoId}
                        onChange={(e) => setInsumoSelecionadoId(Number(e.target.value))}
                    >
                        <option value={0}>Selecione um insumo...</option>
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
                {carregando ? "Salvando..." : (produto ? "Salvar Alterações" : "Cadastrar Produto")}
            </button>
        </form>
        </div>
    );
}