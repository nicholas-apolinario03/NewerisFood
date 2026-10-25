import { Link,useNavigate,} from "react-router-dom";

import "../../css/header.css"


export default function Header() {
    const navigate =
        useNavigate();

    const token =
        localStorage.getItem(
            "token_auth"
        );

    const logado =
        Boolean(token);

    function sair() {
        localStorage.removeItem(
            "token_auth"
        );

        navigate(
            "/login"
        );

        window.location.reload();
    }

    return (
        <header className="header-principal">
            <div className="header-principal__conteudo">
                <Link
                    to="/"
                    className="header-principal__logo"
                >
                 <span> NewerisBook</span>
                </Link>

                {logado ? (
                    <nav
                        className="header-principal__navegacao"
                        aria-label="Navegação principal"
                    >
                        <Link
                            to="/painel"
                            className="header-principal__link"
                        >
                            Painel
                        </Link>

                        <Link
                            to="/estoque"
                            className="header-principal__link"
                        >
                            estoque
                        </Link>
                          <Link
                            to="/pedido"
                            className="header-principal__link"
                        >
                            Pedido
                        </Link>
                          <Link
                            to="/perfil"
                            className="header-principal__link"
                        >
                            Perfil
                        </Link>

                        <button
                            type="button"
                            className="header-principal__link header-principal__sair"
                            onClick={sair}
                        >
                            Sair
                        </button>
                    </nav>
                ) : (
                    <nav
                        className="header-principal__navegacao"
                        aria-label="Navegação principal"
                    >
                        <a
                            href="#sobre"
                            className="header-principal__link"
                        >
                            Sobre
                        </a>

                        <a
                            href="/planos"
                            className="header-principal__link"
                        >
                            Planos
                        </a>

                        <Link
                            to="/login" 
                            className="header-principal__link"
                        >
                            Entrar
                        </Link>

                        <Link
                            to="/cadastro"
                            className="header-principal__botao"
                        >
                            Começar
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}