import { Link } from "react-router-dom"
import "../estilos/navbar.css"

const Navbar = () => {
    return (
        <div className="contenedor-navbar">
            <ul className="lista-navbar">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/create-account">Crear Cuenta</Link></li>
                <li><Link to="/films">Peliculas</Link></li>
                <li><Link to="/series">Series</Link></li>
            </ul>
        </div>

    )
}

export default Navbar