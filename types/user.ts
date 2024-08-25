import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
export type UsersData = AxiosResponse<Array<User>, any> | undefined;
export type Users = Record<number, User>;

export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  //gender: "female" | "male";
  //status: "inactive" | 'active';
};
export type UseUsersType = {
  usersData: Users;
  usersError: Error | null;
  usersRefetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<UsersData, Error | null>> | void;
  usersIsError: boolean;
  usersIsFetched: boolean;
  usersIsLoading: boolean;
  usersIsFetching: boolean;
  usersIsRefetching: boolean;
  getUserById: (id: number) => Promise<User>;
};
export const initalUsersContextValues: UseUsersType = {
  usersData: {},
  usersError: null,
  usersRefetch: function (options?: RefetchOptions | undefined): Promise<QueryObserverResult<UsersData, Error | null>> | void {
    throw new Error('Function not implemented.');
  },
  usersIsError: false,
  usersIsFetched: false,
  usersIsLoading: false,
  usersIsFetching: false,
  usersIsRefetching: false,
  getUserById: function (id: number): Promise<User> {
    throw new Error("Function not implemented.");
  }
}