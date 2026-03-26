import { useParams } from "react-router-dom"
import { useSeriesId } from "../hooks/useSeriesId"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const SeriesDetail = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useSeriesId(id!)
    const navegar = useNavigate()

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error</p>

    const posterUrl = data.poster_path
        ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
        : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback

    return(
        <div>
            <span><FaArrowLeftLong  onClick={() => navegar("/series")}/></span>
            <img src={posterUrl} alt={data.name}/>
            <h1>{data.name}</h1>
            <p>{data.overview}</p>
            <p>{data.first_air_date}</p>
            <p>{data.number_of_seasons}</p>
            <p>{data.vote_average}</p>
            <button>Ver Aqui</button>
        </div>
    )
}

export default SeriesDetail