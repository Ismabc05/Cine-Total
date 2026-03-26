import { useParams } from "react-router-dom"
import { useMoviesId } from "../hooks/useMoviesId"
import "../estilos/film.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const FilmDetail = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useMoviesId(id!)
    const navegar = useNavigate()

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error</p>
    const posterUrl = data.poster_path
        ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
        : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback


    return(
        <div className="contenedor-film">
            <span><FaArrowLeftLong  onClick={() => navegar("/films")}/></span>
            <img src={posterUrl} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <p>{data.release_date}</p>
            <p>{data.runtime}</p>
            <p>{data.vote_average}</p>
            <button>Ver Aqui</button>
        </div>
    )
}

export default FilmDetail