import { useQuery } from "@tanstack/react-query";
import { fetchSeries } from "../servicios/fetchSeries";

export const useSeries = () => {
    return useQuery({
        queryKey: ["series"],
        queryFn: fetchSeries,
    })
}