import { useState, type FormEvent } from "react";
import { empresaService } from "../services/empresaService";
import DashboardLayout from "../layouts/DashboardLayout";


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
            const resultado = await empresaService.entrar({ email, senha })
            if (resultado.token) {
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
        <DashboardLayout>
            <div className="pagina-login">
                {erro && <p style={{ color: "red" }}>{erro}</p>}
                <form className="formulario-login" onSubmit={enviarLogin}>
                    <header className="formulario-login__cabecalho">
                        <h1>Bem-vindo de volta</h1>
                        <p>Entre com suas credenciais para acessar sua conta.</p>
                    </header>
                    <div className="formulario-login__campo"><label htmlFor="login-email">E-mail</label>
                     <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="formulario-login__campo"><label htmlFor="login-email">E-mail</label>
                    <input type="password" name="senha" placeholder="Senha" minLength={8} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                   
                    <a className="formulario-login__esqueci" href="/recuperar-senha" data-discover="true">Esqueci minha senha</a>

                    <button type="submit">{carregando ? "Entrando..." : "Entrar"}</button>
                </form>
            </div>
        </DashboardLayout>
    )
}