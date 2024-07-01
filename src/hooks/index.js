import { useQuery } from "@tanstack/react-query";
import { getAllPostData } from "../api";

export const useGetAllPost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPostData(),
    staleTime: 5000,
    gcTime: 100000,
  });
};
