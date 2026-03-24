import { useNavigate } from "react-router-dom"


const Login = () => {

    const navegar = useNavigate()

    const handleCrear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navegar("/create-account")
    }



    return(
        <form>
            <h1>Iniciar sesion</h1>
            <label className="label-nombre">Introduzca su nombre:</label>
            <input/>
            <label className="label-contraseña">Introduzca su contraseña</label>
            <input/>
            <button className="boton-entrar">Entrar</button>
            <button className="boton-entrar" type="button" onClick={handleCrear}>Crear Cuenta</button>


        </form>
        
    )
}


export default Login