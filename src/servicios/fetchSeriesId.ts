
export const fetchSerieById = async (id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  });

  if (!res.ok) throw new Error("Error al obtener la película");

  return res.json();
};