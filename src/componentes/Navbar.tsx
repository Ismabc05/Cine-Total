import { Link } from "react-router-dom"
import "../estilos/navbar.css"
import { FaHome, FaTv } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="contenedor-navbar">
            <div className="navbar-content">

                <div className="logo">CINE-TOTAL</div>

                <ul className="lista-navbar">
                    <li>
                        <Link to="/">
                            <FaHome className="icono" />
                            INICIO
                        </Link>
                    </li>

                    <li>
                        <Link to="/films">
                            <FaFilm className="icono" />
                            PELÍCULAS
                        </Link>
                    </li>

                    <li>
                        <Link to="/series">
                            <FaTv className="icono" />
                            SERIES
                        </Link>
                    </li>
                </ul>

                
                <div className="buscador">
                    
                    <FaSearch />
                </div>

            </div>
        </div>
    )
}

export default Navbar