import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateAcount = () => {

    const navegar = useNavigate()

    const [TodoText, setTodoText] = useState({
        nombre: "",
        contraseña: "",
    })

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodoText(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const handleCrear = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Datos del formulario: ", TodoText)
        navegar("/")

    }




    return(
        <form onSubmit={handleCrear}>
            <h1>Crear cuenta</h1>
            <label className="label-nombre">Introduzca su nombre:</label>
            <input type="text" name="nombre" value={TodoText.nombre} onChange={handleChange}/>
            <label className="label-contraseña">Introduzca su contraseña</label>
            <input type="password" name="contraseña" value={TodoText.contraseña} onChange={handleChange}/>
            <button className="boton-entrar" type="submit">Crear Cuenta</button>
        </form>
    )
}


export default CreateAcount