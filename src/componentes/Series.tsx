import { useSeries } from "../hooks/useSeries"
import "../estilos/series.css"
import { ImFilm } from "react-icons/im";
import { Link } from "react-router-dom";


const Series = () => {
    const { data, isLoading, error } = useSeries();

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar las series</p>;

    return (
        <div className="series-container">
            
            <div className="series-header">
                <ImFilm className="icono" />
                <p className="parrafo-series">Series online gratis</p>
            </div>

                <div className="series-list">
                    {data.results.map((serie: any) => {
                        const posterUrl = serie.poster_path
                            ? `https://image.tmdb.org/t/p/w300${serie.poster_path}`
                            : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback

                        return (
                            <Link to={`/series/${serie.id}`} key={serie.id}>
                                <div key={serie.id} className="serie-card">
                                <img
                                    src={posterUrl}
                                    alt={serie.name}
                                    className="serie-poster"
                                />
                                <p className="serie-name">{serie.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
        </div>
    );
};

export default Series;