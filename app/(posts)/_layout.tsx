import usePosts from "@/hooks/usePosts";
import {
  initalPostsContextValues,
  PostData,
  PostsData,
  UsePostsType,
} from "@/types/posts";
import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React, { createContext } from "react";

export const PostsContext = createContext<UsePostsType>(
  initalPostsContextValues
);

export default function PostsLayout() {
  const usePostsData = usePosts();

  return (
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
  );
}
