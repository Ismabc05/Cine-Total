export const fetchMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  });

  if (!res.ok) throw new Error("Error al obtener películas");

  return res.json();
};