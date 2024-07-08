import { get } from "lodash";
import { api } from "services";
import { useMutation } from "@tanstack/react-query";

type typeUsePost = {
  path: string;
  queryKey: string;
  onError: (data: unknown) => void;
  onSuccess: (data: unknown) => void;
};

const usePost = ({
  path = "",
  onError = () => {},
  onSuccess = () => {},
}: typeUsePost) => {
  const response = useMutation({
    mutationFn: (data: unknown) => {
      return api.post(path, data).then((response) => {
        return get(response, "data");
      });
    },
    onError: (error) => onError(error),
    onSuccess: (successData) => onSuccess(successData),
  });
  return response;
};

export default usePost;
