/*
    ========================================
    I know this is an overkill but just imagine that this is another
    huge sub-module that need to have another context to handle its data
    ========================================
*/
import { useEffect, useState } from "react";
import { GetAllPostComments } from "@/services/CommentsService";
import { Comment, UseCommentsType } from "@/types/comments";
import { useQuery } from "@tanstack/react-query";

const useComments: (postId: string) => UseCommentsType = (postId) => {
  const [comments, setComments] = useState<Array<Comment>>([]);

  const {
    data: commentsData,
    error: commentsError,
    refetch: commentsRefetch,
    isError: commentsIsError,
    isFetched: commentsIsFetched,
    isLoading: commentsIsLoading,
    isFetching: commentsIsFetching,
    isRefetching: commentsIsRefetching,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => GetAllPostComments(postId),
  });


  useEffect(() => {
    if (commentsIsFetched && commentsData) {
      setComments(commentsData.data)
    }
  }, [commentsData, commentsIsFetched])


  return {
    commentsData: comments,
    commentsError,
    commentsRefetch,
    commentsIsError,
    commentsIsFetched,
    commentsIsLoading,
    commentsIsFetching,
    commentsIsRefetching,
  }
}

export default useComments;
