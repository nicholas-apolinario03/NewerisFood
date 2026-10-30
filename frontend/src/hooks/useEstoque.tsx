import { useState, useEffect, useCallback } from "react";
import type { Insumo, NovoInsumo } from "../types/estoque";
import { estoqueService } from "../services/estoqueService";

export function useEstoque() {
    const [insumos, setInsumos] = useState<Insumo[]>([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const carregarEstoque = useCallback(async () => {
        setCarregando(true);
        try {
            const dados = await estoqueService.listar();
            setInsumos(dados);
        } catch (err) {
            setErro('Erro ao carregar o estoque.');
        } finally {
            setCarregando(false);
        }
    }, []);

    useEffect(() => {
        carregarEstoque();
    }, [carregarEstoque]);

    async function cadastrarInsumo(dados: NovoInsumo) {
        try {
            await estoqueService.criar(dados);
            await carregarEstoque(); // Atualiza a lista automaticamente
            return true;
        } catch (err) {
            setErro('Erro ao cadastrar insumo.');
            return false;
        }
    }
    async function excluirInsumo(id: number | string): Promise<boolean> {
        try {
            await estoqueService.excluir(id);
            // Remove o insumo da lista localmente para atualizar a tela na hora
            setInsumos(prev => prev.filter(insumo => insumo.id !== id));
            return true;
        } catch (err: any) {
            setErro(err.message || 'Erro ao excluir o insumo.');
            alert(err.message || 'Erro ao excluir o insumo.');
            return false;
        }
    }


    // Aqui futuramente entram as funções de editar e deletar com facilidade!

    return {
        insumos,
        carregando,
        erro,
        cadastrarInsumo,
        excluirInsumo,
        recarregarEstoque: carregarEstoque
    };
}