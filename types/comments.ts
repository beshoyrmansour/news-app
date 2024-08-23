import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
export type CommentsData = AxiosResponse<Array<Comment>, any> | undefined;
export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type UseCommentsType = {
  commentsData: Array<Comment>;
  commentsError: Error | null;
  commentsRefetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<CommentsData, Error | null>> | void;
  commentsIsError: boolean;
  commentsIsFetched: boolean;
  commentsIsLoading: boolean;
  commentsIsFetching: boolean;
  commentsIsRefetching: boolean;
};
export const initalCommentsContextValues: UseCommentsType = {
  commentsData: [],
  commentsError: null,
  commentsRefetch: function (options?: RefetchOptions | undefined): Promise<QueryObserverResult<CommentsData, Error | null>> | void {
    throw new Error('Function not implemented.');
  },
  commentsIsError: false,
  commentsIsFetched: false,
  commentsIsLoading: false,
  commentsIsFetching: false,
  commentsIsRefetching: false
}