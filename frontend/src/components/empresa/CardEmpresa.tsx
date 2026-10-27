import type { Empresa, NovaEmpresaDTO } from "../../types/empresa";
import { FormularioEmpresa } from "./FormularioEmpresa"; // Ajuste o caminho se necessário

type CardEmpresaProps = {
    empresa: Empresa;
    onSalvarAlteracoes?: (dados: NovaEmpresaDTO) => void;
    carregando?: boolean;
}

function CardEmpresa({ empresa, onSalvarAlteracoes, carregando = false }: CardEmpresaProps) {
    // Função chamada ao submeter o formulário de edição
    function handleSalvar(dados: NovaEmpresaDTO) {
        if (onSalvarAlteracoes) {
            onSalvarAlteracoes(dados);
        }
    }

    return (
        <div>
            {/* Reutiliza o formulário passando a empresa para preencher os inputs */}
            <FormularioEmpresa 
                empresa={empresa} 
                aoSalvar={handleSalvar} 
                carregando={carregando} 
            />
        </div>
    );
}

export default CardEmpresa;