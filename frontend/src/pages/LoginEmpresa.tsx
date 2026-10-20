import { useState, type FormEvent } from "react";
import { empresaService } from "../services/empresaService";


export function LoginEmpresa() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function enviarLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setCarregando(true);
        setErro('');

        try {
            const resultado = await empresaService.entrar({email,senha})
            if(resultado.token){
            localStorage.setItem('token_auth', resultado.token)
            }
            alert("Login feito com sucesso!!!")
        } catch (err) {
            setErro('Não foi possível realizar o Login. Verifique o email e a senha.');
        } finally {
            setCarregando(false);
        }
    }
    return (
        <div>
            <h2>Login Empresa</h2>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            <form onSubmit={enviarLogin}>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name="senha" placeholder="Senha" minLength={8} value={senha} onChange={(e) => setSenha(e.target.value)} required />

            <button type="submit">{carregando ? "Entrando..." : "Entrar"}</button>
            </form>
        </div>
    )
}