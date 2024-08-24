import { Image, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';
import useComments from '@/hooks/useComments';
import { Comment, initalCommentsContextValues, UseCommentsType } from '@/types/comments';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { PostsContext } from './_layout';
import { FlatList } from 'react-native';
import PostComment from '@/components/posts/PostComment';
import EmptyState from '@/components/EmptyState';
import { useThemeColor } from '@/hooks/useThemeColor';

export const CommentsContext = createContext<UseCommentsType>(initalCommentsContextValues)

const PostDetailsPage = () => {
  const { postId } = useLocalSearchParams<{ postId: string }>();
  const useCommentsData = useComments(postId);
  const backgroundThemeColor = useThemeColor({ light: '', dark: '' }, 'background');

  const {
    postData,
    postRefetch,
    postIsFetching,
    updateCurrentPostId,
  } = useContext(PostsContext);


  const onRefresh = () => {
    postRefetch();
    useCommentsData.commentsRefetch();
  }

  useEffect(() => {
    if (postId) {
      updateCurrentPostId(postId);
    }
  }, [postId]);

  if (useCommentsData.commentsIsLoading) {
    return (<ThemedView>
      <ThemedText>posts is Loading...</ThemedText>
    </ThemedView>)
  }
  if (useCommentsData.commentsIsError) {
    return (<ThemedView>
      <ThemedText>posts has Error</ThemedText>
    </ThemedView>)
  }
  return (
    <CommentsContext.Provider value={{ ...useCommentsData }}>
      <FlatList
        style={{
          backgroundColor: backgroundThemeColor,
        }}
        data={useCommentsData.commentsData}
        renderItem={({ item }: { item: Comment }) => (<PostComment {...item} />)}
        keyExtractor={(item: Comment) => item.id.toString()}
        ListHeaderComponent={() => (
          <ThemedView>
            <ParallaxScrollView
              headerBackgroundColor={{ light: backgroundThemeColor, dark: backgroundThemeColor }}
              headerImage={
                <Image
                  style={{ flex: 1 }}
                  source={{
                    uri: postData?.cover_url
                      ??
                      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
                  }}
                />
              }>
              <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{postData?.title}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.container}>
                <ThemedText>
                  {postData?.body}
                </ThemedText>
              </ThemedView>
            </ParallaxScrollView>
            <ThemedView style={styles.commentsContainer}>
              <ThemedText type='subtitle'>Comments</ThemedText>
              <ThemedText type='defaultSemiBold'>({useCommentsData.commentsData.length})</ThemedText>
            </ThemedView>
          </ThemedView>
        )}
        refreshControl={
          <RefreshControl refreshing={postIsFetching} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <EmptyState
            title="No Comments Found"
            subtitle="No one commented yet"
          />
        )}
      />

      <Stack.Screen options={{
        headerTitleStyle: {
          fontFamily: 'Faro-BoldLucky'
        },
        headerTitle: () => (<ThemedText
          numberOfLines={1}
          ellipsizeMode='tail'
          style={{
            maxWidth: 300
          }}>
          {postData?.title}
        </ThemedText>)
      }} />
    </CommentsContext.Provider>
  )
}

export default PostDetailsPage


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    gap: 8,
    marginBottom: 8,
  },
  commentsContainer: {
    paddingStart: 22,
    paddingEnd: 22,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
