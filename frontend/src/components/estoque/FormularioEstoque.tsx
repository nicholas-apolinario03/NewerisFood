import { useState, useEffect, type FormEvent } from "react";
import type { Insumo, NovoInsumo } from "../../types/estoque";

type FormularioEstoqueProps = {
    insumo?: Insumo;
    aoSalvar: (dados: NovoInsumo) => void;
    carregando: boolean;
};

export function FormularioInsumo({ insumo, aoSalvar, carregando }: FormularioEstoqueProps) {
    const [nome, setNome] = useState("");
    // Tipamos o estado especificamente com as opções aceitas pelo TypeScript
    const [unidadeMedida, setUnidadeMedida] = useState<'kg' | 'g' | 'unidade' | 'ml' | 'l'>("kg");
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
        aoSalvar({
            nome,
            unidadeMedida,
            quantidadeAtual: Number(quantidadeAtual) || 0,
            estoqueMinimo: Number(estoqueMinimo) || 0
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome do Insumo (ex: Mussarela)"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />

            {/* Substituído por um <select> para respeitar exatamente o tipo do TypeScript */}
            <select
                value={unidadeMedida}
                onChange={(e) => setUnidadeMedida(e.target.value as 'kg' | 'g' | 'unidade' | 'ml' | 'l')}
                required
            >
                <option value="kg">Quilograma (kg)</option>
                <option value="g">Grama (g)</option>
                <option value="unidade">Unidade (un)</option>
                <option value="ml">Mililitro (ml)</option>
                <option value="l">Litro (l)</option>
            </select>

            <input
                type="number"
                placeholder="Quantidade Atual"
                value={quantidadeAtual}
                onChange={(e) => setQuantidadeAtual(e.target.value === "" ? "" : Number(e.target.value))}
                required
            />

            <input
                type="number"
                placeholder="Estoque Mínimo"
                value={estoqueMinimo}
                onChange={(e) => setEstoqueMinimo(e.target.value === "" ? "" : Number(e.target.value))}
                required
            />

            <button type="submit" disabled={carregando}>
                {carregando ? "Salvando..." : (insumo ? "Salvar Alterações" : "Cadastrar Insumo")}
            </button>
        </form>
    );
}