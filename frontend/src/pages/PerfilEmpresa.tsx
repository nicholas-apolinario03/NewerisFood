import { useCallback, useEffect, useState } from "react";
import CardEmpresa from "../components/empresa/CardEmpresa";
import DashboardLayout from "../layouts/DashboardLayout";
import { empresaService } from "../services/empresaService";
import type { Empresa } from "../types/empresa";

export function PerfilEmpresa() {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

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

  return (
    <DashboardLayout>
      <div>
        {loading && <p>A carregar perfil...</p>}
        
        {erro && <p style={{ color: "red" }}>{erro}</p>}

        {!loading && !erro && empresa && (
          <CardEmpresa empresa={empresa} />
        )}
      </div>
    </DashboardLayout>
  );
}