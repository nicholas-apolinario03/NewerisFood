import { useState, useEffect, useCallback } from "react";
import { listarSabores, cadastrarSabor } from "../services/saborService";
import type { SaborCardapio, NovoSaborDTO } from "../types/cardapio";

export function useSabores() {
    const [sabores, setSabores] = useState<SaborCardapio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null);

    const carregarSabores = useCallback(async () => {
        setCarregando(true);
        setErro(null);
        try {
            const dados = await listarSabores();
            setSabores(dados);
        } catch (err) {
            console.error("Erro ao carregar sabores:", err);
            setErro("Não foi possível carregar a lista de sabores.");
        } finally {
            setCarregando(false);
        }
    }, []);

    useEffect(() => {
        carregarSabores();
    }, [carregarSabores]);

    const salvarSabor = async (dados: NovoSaborDTO) => {
        setCarregando(true);
        setErro(null);
        try {
            const novoSabor = await cadastrarSabor(dados);
            setSabores((prev) => [...prev, novoSabor]);
            return true;
        } catch (err) {
            console.error("Erro ao cadastrar sabor:", err);
            setErro("Erro ao salvar o sabor.");
            return false;
        } finally {
            setCarregando(false);
        }
    };

    return {
        sabores,
        carregando,
        erro,
        recarregarSabores: carregarSabores,
        salvarSabor,
    };
}