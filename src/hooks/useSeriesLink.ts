import { useQuery } from "@tanstack/react-query";
import { fetchSeriesLinks } from "../servicios/fetchSeriesLink";

export const useSeriesLink = (id: string) => {
  return useQuery({
    queryKey: ["series-external", id],
    queryFn: () => fetchSeriesLinks(id),
    enabled: !!id
  });
};