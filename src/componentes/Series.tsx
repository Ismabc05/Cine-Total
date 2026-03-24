import { useSeries } from "../hooks/useSeries"

const Series = () => {
    const { data, isLoading, error } = useSeries();

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar las series</p>;

    return (
        <div className="series-container">
            <h1>Series</h1>
            <div className="series-list">
                {data.results.map((serie: any) => {
                    const posterUrl = serie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${serie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback

                    return (
                        <div key={serie.id} className="serie-card">
                            <img
                                src={posterUrl}
                                alt={serie.name}
                                className="serie-poster"
                            />
                            <p className="serie-name">{serie.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Series;