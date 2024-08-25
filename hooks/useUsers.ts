/*
    ========================================
    I know this is an overkill but just imagine that this is another
    huge sub-module that need to have another context to handle its data
    ========================================
*/
import { useEffect, useState } from "react";
import { GetAllUsers, GetUserData } from "@/services/UsersService";
import { User, UseUsersType, Users } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

const useUsers: () => UseUsersType = () => {
  const [users, setUsers] = useState<Users>({});

  const {
    data: usersData,
    error: usersError,
    refetch: usersRefetch,
    isError: usersIsError,
    isFetched: usersIsFetched,
    isLoading: usersIsLoading,
    isFetching: usersIsFetching,
    isRefetching: usersIsRefetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => GetAllUsers(),
  });



  useEffect(() => {
    if (usersIsFetched && usersData) {

      let usersObj: Users = {}
      usersData.data.forEach((usersData: User) => {
        usersObj[usersData.id] = { ...usersData }
      })
      setUsers({ ...users, ...usersObj })
    }
  }, [usersIsFetched])


  const getUserById = async (id: number) => {
    const user = await (await GetUserData(id.toString())).data;
    setUsers({ ...users, [id]: { ...user } })
    return user
  }



  return {
    usersData: users,
    usersError,
    usersRefetch,
    usersIsError,
    usersIsFetched,
    usersIsLoading,
    usersIsFetching,
    usersIsRefetching,
    getUserById
  }
}

export default useUsers;
