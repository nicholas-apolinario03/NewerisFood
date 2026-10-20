import { useState, useEffect, type FormEvent } from "react";

import type { Funcionario, NovofuncionarioDTO } from "../../types/funcionario";


type FormularioFuncionarioProps = {
    funcionario?: Funcionario;
    aoSalvar: (dados: NovofuncionarioDTO) => void;
    carregando: boolean;
};
export function FormularioFuncionario({ funcionario, aoSalvar }: FormularioFuncionarioProps) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [empresaid, setEmpresaId] = useState<number>(1) //temporario

    useEffect(() => {
        if (funcionario) {
            setNome(funcionario.nome || "");
            setTelefone(funcionario.telefone || "");
            setEmail(funcionario.email || "");

        }
    }, [funcionario]);
    function CadastrarFuncionario(e: FormEvent) {
        e.preventDefault();
        aoSalvar({ nome, telefone, email, empresaid })
    }
    return (
        <form onSubmit={CadastrarFuncionario}>
            <input type="text" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="email"name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input type="text" name="telefone" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

            <button type="submit">
                {funcionario ? "Salvar Alterações" : "Cadastrar Funcionario"}
            </button>
        </form>
    )

}