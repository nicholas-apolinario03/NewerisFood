import { useState, useEffect, type FormEvent } from "react";
import type { SaborCardapio, ItemReceitaDTO } from "../../types/cardapio";
import type { Insumo } from "../../types/estoque";
import "../../css/formulario.css";

type FormularioSaborProps = {
    sabor?: SaborCardapio;
    insumosDisponiveis?: Insumo[];
    aoSalvar: (dados: any) => void;
    carregando: boolean;
};

export function FormularioSabor({ sabor, insumosDisponiveis = [], aoSalvar, carregando }: FormularioSaborProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState<number | "">("");
    const [disponivel, setDisponivel] = useState(true);

    const [ingredientes, setIngredientes] = useState<ItemReceitaDTO[]>([]);
    const [insumoSelecionadoId, setInsumoSelecionadoId] = useState<number>(0);
    const [quantidadeGasta, setQuantidadeGasta] = useState<number | "">("");

    useEffect(() => {
        if (sabor) {
            setNome(sabor.nome || "");
            setPreco(sabor.preco ?? "");
            setDisponivel(sabor.disponivel ?? true);
            setIngredientes(sabor.ingredientes || []);
        }
    }, [sabor]);

    function adicionarIngrediente() {
        if (!insumoSelecionadoId || !quantidadeGasta) return;

        const jaExiste = ingredientes.some(item => item.insumoId === insumoSelecionadoId);
        if (jaExiste) {
            alert("Este insumo já foi adicionado à ficha técnica.");
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
        aoSalvar({
            nome,
            preco: Number(preco) || 0,
            disponivel,
            ingredientes
        });
    }

    return (
        <div className="pagina-login">
        <form onSubmit={handleSubmit} className="formulario formulario--amplo">
            <header className="formulario__cabecalho">
                <h1>{sabor ? "Editar Sabor" : "Cadastrar Sabor"}</h1>
                <p>Configure o recheio e os insumos consumidos no estoque.</p>
            </header>

            <div className="formulario__campo">
                <label htmlFor="sabor-nome">Nome do Sabor</label>
                <input
                    id="sabor-nome"
                    type="text"
                    placeholder="Ex: Calabresa, Quatro Queijos"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>

            <div className="formulario__campo">
                <label htmlFor="sabor-preco">Preço (Inteiro)</label>
                <input
                    id="sabor-preco"
                    type="number"
                    step="0.01"
                    placeholder="Ex: 50.00"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value === "" ? "" : Number(e.target.value))}
                    required
                />
            </div>

            <label className="formulario__checkbox">
                <input
                    type="checkbox"
                    checked={disponivel}
                    onChange={(e) => setDisponivel(e.target.checked)}
                />
                Sabor disponível para venda
            </label>

            <hr />

            <div>
                <h4>Ingredientes do Recheio (Ficha Técnica do Sabor)</h4>
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
                {carregando ? "Salvando..." : (sabor ? "Salvar Alterações" : "Cadastrar Sabor")}
            </button>
        </form>
        </div>
    );
}