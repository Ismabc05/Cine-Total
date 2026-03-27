import { useParams, useNavigate } from "react-router-dom"
import { useSeriesId } from "../hooks/useSeriesId"
import { FaArrowLeftLong } from "react-icons/fa6";
import "../estilos/detail.css"

const SeriesDetail = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useSeriesId(id!)
    const navegar = useNavigate()

    if (isLoading) return <p className="loading">Cargando...</p>
    if (error) return <p className="error">Error</p>

    const posterUrl = data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : "https://via.placeholder.com/500x750?text=Sin+Imagen";

    const backdropUrl = data.backdrop_path
        ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
        : "";

    return(
        <div 
            className="detail-container"
            style={{ backgroundImage: `url(${backdropUrl})` }}
        >

            {/* overlay oscuro */}
            <div className="overlay">

                {/* botón volver */}
                <span className="back-btn" onClick={() => navegar("/series")}>
                    <FaArrowLeftLong />
                </span>

                <div className="detail-content">

                    {/* poster */}
                    <img 
                        src={posterUrl} 
                        alt={data.name} 
                        className="detail-poster"
                    />

                    {/* info */}
                    <div className="detail-info">
                        <h1>{data.name}</h1>

                        <p className="rating">⭐ {data.vote_average}</p>

                        <p className="meta">
                            📅 {data.first_air_date} • 📺 {data.number_of_seasons} temporadas
                        </p>

                        <p className="overview">
                            {data.overview}
                        </p>

                        <button className="watch-btn">
                            ▶ Ver ahora
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SeriesDetail