import { Stack } from 'expo-router';
import React from 'react';

export default function PostsLayout() {

  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="index" options={{
        headerShown: true, 

 }} />
      <Stack.Screen name="[postId]" options={{ headerShown: true, headerTitle:''}} />
    </Stack>
  );
}
