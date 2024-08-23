import callAPI from "@/api";
import { Comment } from "@/types/comments";

export const GetAllPostComments = (postId: string) => {
  return callAPI<unknown, Array<Comment>, unknown>(
    "get",
    `/posts/${postId}/comments`,
    [],
    undefined,
    {
      // country: "eg",
      // language: "en",
      source: "technology",
      sortBy: "publishedAt",
    }
  );
};
