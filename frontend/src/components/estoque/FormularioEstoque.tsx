import { useState, useEffect, type FormEvent } from "react";
import type { Insumo, NovoInsumo } from "../../types/estoque";
import "../../css/formulario.css";

type FormularioEstoqueProps = {
    insumo?: Insumo;
    aoSalvar: (dados: NovoInsumo) => void;
    carregando: boolean;
};

export function FormularioInsumo({ insumo, aoSalvar, carregando }: FormularioEstoqueProps) {
    const [nome, setNome] = useState("");
    const [unidadeMedida, setUnidadeMedida] = useState<"kg" | "g" | "unidade" | "ml" | "l">("kg");
    const [quantidadeAtual, setQuantidadeAtual] = useState<number | "">("");
    const [estoqueMinimo, setEstoqueMinimo] = useState<number | "">("");

    useEffect(() => {
        if (insumo) {
            setNome(insumo.nome || "");
            setUnidadeMedida(insumo.unidadeMedida || "kg");
            setQuantidadeAtual(insumo.quantidadeAtual ?? "");
            setEstoqueMinimo(insumo.estoqueMinimo ?? "");
        }
    }, [insumo]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        aoSalvar({ nome, unidadeMedida, quantidadeAtual: Number(quantidadeAtual) || 0, estoqueMinimo: Number(estoqueMinimo) || 0 });
    }

    return (
        <div className="pagina-login">
            <form onSubmit={handleSubmit} className="formulario">
                <header className="formulario__cabecalho">
                    <h1>{insumo ? "Editar insumo" : "Cadastrar insumo"}</h1>
                    <p>Informe os dados do item e seu controle de estoque.</p>
                </header>
                <div className="formulario__campo">
                    <label htmlFor="insumo-nome">Nome do insumo</label>
                    <input id="insumo-nome" type="text" placeholder="Ex.: Mussarela" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="insumo-unidade">Unidade de medida</label>
                    <select id="insumo-unidade" value={unidadeMedida} onChange={(e) => setUnidadeMedida(e.target.value as "kg" | "g" | "unidade" | "ml" | "l")} required>
                        <option value="kg">Quilograma (kg)</option><option value="g">Grama (g)</option>
                        <option value="unidade">Unidade (un)</option><option value="ml">Mililitro (ml)</option><option value="l">Litro (l)</option>
                    </select>
                </div>
                <div className="formulario__campo">
                    <label htmlFor="insumo-quantidade">Quantidade atual</label>
                    <input id="insumo-quantidade" type="number" min="0" step="any" value={quantidadeAtual} onChange={(e) => setQuantidadeAtual(e.target.value === "" ? "" : Number(e.target.value))} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="insumo-minimo">Estoque mínimo</label>
                    <input id="insumo-minimo" type="number" min="0" step="any" value={estoqueMinimo} onChange={(e) => setEstoqueMinimo(e.target.value === "" ? "" : Number(e.target.value))} required />
                </div>
                <button className="formulario__botao" type="submit" disabled={carregando}>
                    {carregando ? "Salvando..." : insumo ? "Salvar alterações" : "Cadastrar insumo"}
                </button>
            </form>
        </div>
    );
}
