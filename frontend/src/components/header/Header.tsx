import { Link, useNavigate, } from "react-router-dom";

import "../../css/header.css";


export default function Header() {
    const navigate =
        useNavigate();


    return (
        <header className="header-principal">
            <div className="header-principal__conteudo">
                <Link
                    to="/"
                    className="header-principal__logo"
                >
                    <span> NewerisFood</span>
                </Link>


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
                        to="/perfil"
                        className="header-principal__link"
                    >
                        Perfil
                    </Link>


                    <Link
                        to="/cadastro"
                        className="header-principal__botao"
                    >
                        Começar
                    </Link>
                     <Link
                        to="/pedido"
                        className="header-principal__botao"
                    >
                        Pedido
                    </Link>
                     <Link
                        to="/comanda"
                        className="header-principal__botao"
                    >
                        Comanda
                    </Link>
                </nav>

            </div>
        </header>
    );
}