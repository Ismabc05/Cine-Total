import { useQuery } from "@tanstack/react-query";
import { fetchMovieById } from "../servicios/fetchMoviesId";

export const useMoviesId = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id),
    enabled: !!id // “Solo haz el fetch si id existe”
  });
};