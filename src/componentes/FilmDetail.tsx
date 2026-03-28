import { useParams, useNavigate } from "react-router-dom"
import { useMoviesId } from "../hooks/useMoviesId"
import "../estilos/detail.css"
import { FaArrowLeftLong } from "react-icons/fa6";

const FilmDetail = () => {

    const { id } = useParams()
    const { data, isLoading, error } = useMoviesId(id!)
    const navegar = useNavigate()

    if (isLoading) return <p className="loading">Cargando...</p>
    if (error) return <p className="error">Error</p>

    const posterUrl = data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : "https://via.placeholder.com/500x750?text=Sin+Imagen";

    const backdropUrl = data.backdrop_path
        ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
        : "";
    

    const imdbUrl = `https://www.imdb.com/title/${data.imdb_id}`

    return(
        <div 
            className="detail-container"
            style={{ backgroundImage: `url(${backdropUrl})` }}
        >

            <div className="overlay">

                {/* Flecha */}
                <span className="back-btn" onClick={() => navegar("/films")}>
                    <FaArrowLeftLong />
                </span>

                <div className="detail-content">

                    {/* Poster */}
                    <img 
                        src={posterUrl} 
                        alt={data.title} 
                        className="detail-poster"
                    />

                    {/* Info */}
                    <div className="detail-info">
                        <h1>{data.title}</h1>

                        <p className="rating">⭐ {data.vote_average}</p>

                        <p className="meta">
                            📅 {data.release_date} • ⏱️ {data.runtime} min
                        </p>

                        <p className="overview"> 
                            {data.overview}
                        </p>

                        <a href={imdbUrl} target="blank" rel="noopener noreferrer">
                            <button className="watch-btn">
                                ▶ Ver trailer
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilmDetail