export const fetchSeriesLinks = async (id: string) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/external_ids`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
  });

  if (!res.ok) throw new Error("Error al obtener IDs externos");

  return res.json();
};