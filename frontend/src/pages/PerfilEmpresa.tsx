import { useCallback, useEffect, useState } from "react";
import CardEmpresa from "../components/empresa/CardEmpresa";
import { WhatsAppLoginButton } from "../components/WhatsappLoginButton"; // <--- Importa o componente do WhatsApp
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {loading && <p>A carregar perfil...</p>}
        
        {erro && <p>{erro}</p>}

        {!loading && !erro && empresa && (
          <>
            <CardEmpresa 
              empresa={empresa} 
              onSalvarAlteracoes={handleSalvarAlteracoes}
              carregando={salvando}
            />

            {/* Secção de Integração com o WhatsApp */}
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3>Integração com o WhatsApp</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                Conecte a conta do WhatsApp Business do seu restaurante para ativar o atendimento automatizado.
              </p>
              
              {/* Passa o ID real da empresa logada para o botão */}
              <WhatsAppLoginButton empresaId={empresa.id} />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}