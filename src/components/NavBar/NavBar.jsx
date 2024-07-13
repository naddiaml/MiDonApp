import "./NavBar.css";
import CtaButton from "../CtaButton/CtaButton";

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <div>
            <input id="burger" type="checkbox" />
            <label htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav id="menu">
                <ul className="header-menu">
                    <li className={location.pathname === "/" ? "link current" : "link"}>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>
                    <li className={location.pathname === "/que-hacemos" ? "link current" : "link"}>
                        <Link to="/que-hacemos">
                            ¿Qué hacemos?
                        </Link>
                    </li>

                    <li className={location.pathname === "/sobre-nosotros" ? "link current" : "link"}>
                        <Link to="/sobre-nosotros">
                            Sobre Nosotros
                        </Link>
                    </li>

                    <li className={decodeURIComponent(location.pathname) === "/contacto" ? "link current" : "link"}>
                        <Link to="/contacto">
                            Contáctanos
                        </Link>
                    </li>

                    <li>
                        <Link to="/donar">
                            <CtaButton content={"Donar"} title={"Ir a donar!"}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;