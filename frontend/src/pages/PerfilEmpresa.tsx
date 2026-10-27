import { useCallback, useEffect, useState } from "react";
import CardEmpresa from "../components/empresa/CardEmpresa";
import DashboardLayout from "../layouts/DashboardLayout";
import { empresaService } from "../services/empresaService";
import type { Empresa, NovaEmpresaDTO } from "../types/empresa";

export function PerfilEmpresa() {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);

  const carregarPerfil = useCallback(async () => {
    try {
      setLoading(true);
      const dados = await empresaService.listar(); 
      setEmpresa(dados);
    } catch (err) {
      console.error("Erro ao carregar perfil da empresa:", err);
      setErro("Não foi possível carregar os dados da empresa.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarPerfil();
  }, [carregarPerfil]);

  // Função para lidar com o envio da edição
  async function handleSalvarAlteracoes(dados: NovaEmpresaDTO) {
    try {
      setSalvando(true);
      // Aqui podes criar o método atualizar no teu empresaService depois, ex: await empresaService.atualizar(dados);
      alert("Alterações salvas com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
      alert("Erro ao salvar alterações.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <DashboardLayout>
      <div>
        {loading && <p>A carregar perfil...</p>}
        
        {erro && <p>{erro}</p>}

        {!loading && !erro && empresa && (
          <CardEmpresa 
            empresa={empresa} 
            onSalvarAlteracoes={handleSalvarAlteracoes}
            carregando={salvando}
          />
        )}
      </div>
    </DashboardLayout>
  );
}