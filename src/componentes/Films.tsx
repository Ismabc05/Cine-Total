import { useMovies } from "../hooks/useMovies"
import "../estilos/films.css"
import { MdLiveTv } from "react-icons/md";


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
                        <div key={film.id} className="peliculas-card">
                            <img
                                src={posterUrl}
                                alt={film.title}
                                className="peliculas-poster"
                            />
                            <p className="peliculas-name">{film.title}</p>
                        </div>
                    );
                    })}
                </div>
            </div>
    )
}


export default Films