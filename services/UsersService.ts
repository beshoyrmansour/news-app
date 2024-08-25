import callAPI from "@/api";
import { User } from "@/types/user";

export const GetAllUsers = () => {
  return callAPI<unknown, Array<User>, unknown>(
    "get",
    `/users`,
    [],
    undefined,
    {}
  );
};
export const GetUserData = (id: string) => {
  return callAPI<unknown, User, unknown>(
    "get",
    `/users/${id}`,
    [],
    undefined,
    {}
  );
};
