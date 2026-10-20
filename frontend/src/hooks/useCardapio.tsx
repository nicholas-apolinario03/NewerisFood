import { useCallback, useEffect, useState } from "react";
import type { NovoProdutoDTO, ProdutoCardapio } from "../types/cardapio";
import { cardapioService } from "../services/cardapioService";

export function useCardapio() {
    const [carregando, setCarregando] = useState(false);
    const [produto, setProduto] = useState<ProdutoCardapio[]>([]);
    const [erro, setErro] = useState('');

    async function cadastrarProduto(dados: NovoProdutoDTO) {
        setCarregando(true)
        try {

            await cardapioService.criar(dados);
            await listarProduto(); // Atualiza a lista automaticamente
            return true;
        } catch (err) {
            setErro('Erro ao cadastrar insumo.');
            return false;
        } finally {
            setCarregando(false);
        }
    }
    const listarProduto = useCallback(async () => {
        setCarregando(true)
        try {
            const dados = await cardapioService.listar()
            setProduto(dados)
        } catch (err) {
            setErro('Erro ao carregar o estoque.');
        } finally {
            setCarregando(false);
        }
    }, []);
    useEffect(() => {
        listarProduto();
    }, [listarProduto]);

    return {
        erro,
        carregando,
        produto,
        cadastrarProduto,
        recarregarProduto : listarProduto
    }

}