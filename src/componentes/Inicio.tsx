import { useMovies } from "../hooks/useMovies"
import { useSeries } from "../hooks/useSeries";
import { Link } from "react-router-dom";
import "../estilos/home.css"



const Inicio = () => {

    const { data: moviesData } = useMovies()
    const { data: seriesData } = useSeries()

    const movies = moviesData?.results.slice(0, 6);
    const series = seriesData?.results.slice(0,6);


    return(
        <div className="inicio-container">

        <div className="inicio-hero">
            <h1>Tu plataforma de peliculas y series</h1>
            <p>Explora lo más popular y encuentra qué ver facilmente</p>
        </div>

        <div className="inicio-section">
            <h2>Peliculas más vistas</h2>

            <div className="peliculas-list">
                {movies?.map((movie: any) =>{
                    const posterUrl = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+Imagen";
                
                    return(
                        <Link to={`/films/${movie.id}`} key={movie.id}>
                        <div key={movie.id} className="peliculas-card">
                            <img src={posterUrl} alt={movie.title} className="peliculas-poster"/>
                            <p className="peliculas-name">{movie.title}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>

        <div className="inicio-section">
            <h2>Series más vistas</h2>

            <div className="peliculas-list">
                {series?.map((serie: any) =>{
                    const posterUrl = serie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${serie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+Imagen";
                
                    return(
                        <Link to={`/series/${serie.id}`} key={serie.id}>
                        <div key={serie.id} className="peliculas-card">
                            <img src={posterUrl} alt={serie.name} className="peliculas-poster"/>
                            <p className="peliculas-name">{serie.name}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
    </div>

</div>
        
    )
}


export default Inicio