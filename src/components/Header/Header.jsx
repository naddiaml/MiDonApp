import "./Header.css";

import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";

const Header = () => {
  return (
    <div className="header__container">
      <header>
        <Link to="/" title="Ir a la página principal" className="logo">
          <span>MiDonApp</span>
        </Link>
        <NavBar className={NavBar} />
      </header>
    </div>
  )
}

export default Header