import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPostData } from "../api";

export const useGetPost = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostData(id),
    staleTime: 50000, // 얼마나 stale할지 (데이터가 썩었는지)
    gcTime: 100000, // 얼마나 캐싱할지
  });

  return { data, isLoading, error };
};

export const useDeletePost = (id) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: () => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", id] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return { mutate };
};
