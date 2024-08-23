import callAPI from "@/api";
import { Post } from "@/types/posts";

export const GetAllPosts = () => {
  return callAPI<unknown, Array<Post>, unknown>(
    "get",
    "/posts",
    [],
    undefined,
    {}
  );
};

export const GetPostDetails = (postId: string) => {
  return callAPI<unknown, Post, unknown>(
    "get",
    `/posts/${postId}`,
    [],
    undefined,
    {}
  );
};
