import { useMovies } from "../hooks/useMovies"


const Films = () => {

    const {data, isLoading, error} = useMovies()

    if(isLoading) return <p>Cargando...</p>
    if(error) return <p>Error al cargar las peliculas</p>

    return(
            <div className="series-container">
                <h1>Peliculas</h1>
                <div className="series-list">
                    {data.results.map((film: any) => {
                    const posterUrl = film.poster_path
                        ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+Imagen"; // fallback

                    return (
                        <div key={film.id} className="serie-card">
                            <img
                                src={posterUrl}
                                alt={film.name}
                                className="serie-poster"
                            />
                            <p className="serie-name">{film.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}


export default Films