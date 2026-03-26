import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../servicios/fetchMovies";

export const useMovies = () => {
    return useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovies,
    })
}