import { get } from "lodash";
import { api } from "services";
import { useQuery } from "@tanstack/react-query";

type typeUseGet = {
  path: string;
  queryKey: string;
};

const useGet = ({ path = "/", queryKey }: typeUseGet) => {
  const data = useQuery({
    queryKey: [queryKey],
    queryFn: () => api.get(path).then((response) => get(response, "data")),
  });

  return data;
};

export default useGet;
