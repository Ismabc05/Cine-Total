export const fetchSeries = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` // Token v4
    }
  });

  if (!res.ok) throw new Error("Error al obtener series");

  return res.json();
};