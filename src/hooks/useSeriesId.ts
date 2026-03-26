import { useQuery } from "@tanstack/react-query";
import { fetchSerieById } from "../servicios/fetchSeriesId";

export const useSeriesId = (id: string) => {
  return useQuery({
    queryKey: ["serie", id],
    queryFn: () => fetchSerieById(id),
    enabled: !!id //“Solo haz el fetch si id existe”
  });
};