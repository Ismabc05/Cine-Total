import { useMovies } from "../hooks/useMovies"
import "../estilos/films.css"
import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";


const Films = () => {

    const {data, isLoading, error} = useMovies()

    if(isLoading) return <p>Cargando...</p>
    if(error) return <p>Error al cargar las peliculas</p>


    return(
            <div className="peliculas-container">

                <div className="peliculas-header">
                    <MdLiveTv className="icono" />
                    <p className="peliculas-series">Peliculas online gratis</p>
                </div>

                <div className="peliculas-list">
                    {data.results.map((film: any) => {
                    const posterUrl = film.poster_path
                        ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback

                    return (
                        <Link to={`/films/${film.id}`} key={film.id}>
                                <div key={film.id} className="peliculas-card">
                                <img
                                    src={posterUrl}
                                    alt={film.title}
                                    className="peliculas-poster"
                                />
                                <p className="peliculas-name">{film.title}</p>
                            </div>
                        </Link>
                    );
                    })}
                </div>
            </div>
    )
}


export default Films