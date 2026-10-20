import { useState, useEffect, type FormEvent } from "react";

import type { NovaEmpresaDTO, Empresa } from "../../types/empresa"


type FormularioEmpresaProps = {
    empresa?: Empresa;
    aoSalvar: (dados: NovaEmpresaDTO) => void;
    carregando: boolean;
};
export function FormularioEmpresa({ empresa, aoSalvar }: FormularioEmpresaProps) {
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
    function CadastrarEmpresa(e: FormEvent) {
        e.preventDefault();
        aoSalvar({ nome, telefone, email, senha, endereco })
    }
    return (
        <form onSubmit={CadastrarEmpresa}>
            <input type="text" name="Nome da empresa" placeholder="Nome da Empresa" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="email"name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="senha" placeholder="Senha" minLength={8} value={senha} onChange={(e) => setSenha(e.target.value)}   required/>
            <input type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
            <input type="text" name="endereco" placeholder="Endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
            <button type="submit">
                {empresa ? "Salvar Alterações" : "Cadastrar Empresa"}
            </button>
        </form>
    )

}