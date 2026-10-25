import { useState, useEffect, type FormEvent } from "react";
import "../../css/formulario.css";
import type { NovaEmpresaDTO, Empresa } from "../../types/empresa";

type FormularioEmpresaProps = {
    empresa?: Empresa;
    aoSalvar: (dados: NovaEmpresaDTO) => void;
    carregando: boolean;
};

export function FormularioEmpresa({ empresa, aoSalvar, carregando }: FormularioEmpresaProps) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");

    useEffect(() => {
        if (empresa) {
            setNome(empresa.nome || "");
            setTelefone(empresa.telefone || "");
            setEmail(empresa.email || "");
            setEndereco(empresa.endereco || "");
        }
    }, [empresa]);

    function cadastrarEmpresa(e: FormEvent) {
        e.preventDefault();
        aoSalvar({ nome, telefone, email, senha, endereco });
    }

    return (
        <div className="pagina-login">
            <form onSubmit={cadastrarEmpresa} className="formulario">
                <header className="formulario__cabecalho">
                    <h1>{empresa ? "Editar empresa" : "Cadastrar empresa"}</h1>
                    <p>Preencha os dados da empresa abaixo.</p>
                </header>
                <div className="formulario__campo">
                    <label htmlFor="empresa-nome">Nome da empresa</label>
                    <input id="empresa-nome" type="text" name="nome" placeholder="Nome da Empresa" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="empresa-email">E-mail</label>
                    <input id="empresa-email" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="empresa-senha">Senha</label>
                    <input id="empresa-senha" type="password" name="senha" placeholder="Senha (mínimo 8 caracteres)" minLength={8} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="empresa-telefone">Telefone</label>
                    <input id="empresa-telefone" type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div className="formulario__campo">
                    <label htmlFor="empresa-endereco">Endereço</label>
                    <input id="empresa-endereco" type="text" name="endereco" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                </div>
                <button className="formulario__botao" type="submit" disabled={carregando}>
                    {carregando ? "Salvando..." : empresa ? "Salvar alterações" : "Cadastrar empresa"}
                </button>
            </form>
        </div>
    );
}
