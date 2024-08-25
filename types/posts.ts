import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
export type PostsData = AxiosResponse<Array<Post>, any> | undefined;
export type PostData = AxiosResponse<Post, any> | undefined;
export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  cover_url?: string;
};
export type UsePostsType = {
  postsData: Array<Post>;
  postsError: Error | null;
  postsRefetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<PostsData, Error | null>> | void;
  postsIsError: boolean;
  postsIsFetched: boolean;
  postsIsLoading: boolean;
  postsIsFetching: boolean;
  postsIsRefetching: boolean;

  updateCurrentPostId: (newValue: string) => void;

  postData: Post | undefined;
  postError: Error | null;
  postRefetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<PostData, Error | null>> | void;
  postIsError: boolean;
  postIsFetched: boolean;
  postIsLoading: boolean;
  postIsFetching: boolean;
  postIsRefetching: boolean;
};



export const initalPostsContextValues: UsePostsType = {
  postsData: [],
  postsError: null,
  postsRefetch: function (options?: RefetchOptions | undefined): Promise<QueryObserverResult<PostsData, Error | null>> | void {
    throw new Error('Function not implemented.');
  },
  postsIsError: false,
  postsIsFetched: false,
  postsIsLoading: false,
  postsIsFetching: false,
  postsIsRefetching: false,
  updateCurrentPostId: function (newValue: string): void {
    throw new Error('Function not implemented.');
  },
  postData: undefined,
  postError: null,
  postRefetch: function (options?: RefetchOptions | undefined): Promise<QueryObserverResult<PostData, Error | null>> | void {
    throw new Error('Function not implemented.');
  },
  postIsError: false,
  postIsFetched: false,
  postIsLoading: false,
  postIsFetching: false,
  postIsRefetching: false
}