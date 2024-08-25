import usePosts from "@/hooks/usePosts";
import useUsers from "@/hooks/useUsers";
import {
  initalPostsContextValues,
  PostData,
  PostsData,
  UsePostsType,
} from "@/types/posts";
import { initalUsersContextValues, UseUsersType } from "@/types/user";
import { Stack } from "expo-router";
import React, { createContext } from "react";

export const PostsContext = createContext<UsePostsType>(
  initalPostsContextValues
);

export const UsersContext = createContext<UseUsersType>(
  initalUsersContextValues
);

export default function PostsLayout() {
  const usePostsData = usePosts();
  const useUsersData = useUsers();

  return (
    <UsersContext.Provider value={{ ...useUsersData }}>
      <PostsContext.Provider value={{ ...usePostsData }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="[postId]"
            options={{ headerShown: true, headerTitle: "" }}
          />
        </Stack>
      </PostsContext.Provider>
    </UsersContext.Provider>
  );
}
