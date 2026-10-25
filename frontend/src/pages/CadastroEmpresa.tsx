import { useState} from "react";
import { empresaService } from "../services/empresaService";
import { FormularioEmpresa } from "../components/empresa/FormularioEmpresa";
import type { NovaEmpresaDTO } from "../types/empresa";
import DashboardLayout from "../layouts/DashboardLayout";

export function CadastroEmpresa() {
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function enviarCadastro(dadosEmpresa: NovaEmpresaDTO) {
        setCarregando(true);
        setErro('');

        try {
            const resultado = await empresaService.criar(dadosEmpresa)
            console.log('Empresa cadastrada com sucesso')
            if(resultado.token){
            localStorage.setItem('token_auth', resultado.token)
            }
        } catch (err) {
            setErro('Não foi possível realizar o cadastro. Verifique os dados ou o backend.');
        } finally {
            setCarregando(false);
        }
    }
    return (
        <DashboardLayout>
            <h2>Cadastro de Nova Empresa</h2>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <FormularioEmpresa aoSalvar={enviarCadastro} carregando={carregando} />
        </DashboardLayout>
    )
}