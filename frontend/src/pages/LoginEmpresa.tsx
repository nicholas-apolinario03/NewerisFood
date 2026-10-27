import { useState, type FormEvent } from "react";
import { empresaService } from "../services/empresaService";
import DashboardLayout from "../layouts/DashboardLayout";
import "../css/formulario.css";
import { Navigate, redirect } from "react-router-dom";

export function LoginEmpresa() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    async function enviarLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setCarregando(true);
        setErro("");

        try {
            const resultado = await empresaService.entrar({ email, senha });

            if (resultado.token) {
                localStorage.setItem("token_auth", resultado.token);
            }

            alert("Login feito com sucesso!!!");
           return <Navigate to="/painel" replace />;
        } catch (err) {
            setErro(
                "Não foi possível realizar o login. Verifique o email e a senha."
            );
        } finally {
            setCarregando(false);
        }
    }

    return (
        <DashboardLayout>
            <div className="pagina-login">
                <form
                    className="formulario"
                    onSubmit={enviarLogin}
                >
                    <header className="formulario__cabecalho">
                        <h1>Bem-vindo de volta</h1>
                        <p>
                            Entre com suas credenciais para acessar sua conta.
                        </p>
                    </header>

                    <div className="formulario__campo">
                        <label htmlFor="login-email">E-mail</label>
                        <input
                            id="login-email"
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="formulario__campo">
                        <label htmlFor="login-senha">Senha</label>
                        <input
                            id="login-senha"
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha"
                            minLength={8}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <div className="formulario__opcoes">
                        <a
                            className="formulario__esqueci"
                            href="/recuperar-senha"
                        >
                            Esqueci minha senha
                        </a>
                    </div>

                    <button
                        className="formulario__botao"
                        type="submit"
                        disabled={carregando}
                    >
                        {carregando ? "Entrando..." : "Entrar"}
                    </button>

                    {erro && (
                        <p
                            className="formulario__mensagem"
                            role="alert"
                        >
                            {erro}
                        </p>
                    )}
                </form>
            </div>
        </DashboardLayout>
    );
}