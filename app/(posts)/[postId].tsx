import { Image, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';
import useComments from '@/hooks/useComments';
import { Comment, initalCommentsContextValues, UseCommentsType } from '@/types/comments';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import { PostsContext } from './_layout';
import { FlatList } from 'react-native';
import PostComment from '@/components/PostComment';
import EmptyState from '@/components/EmptyState';

export const CommentsContext = createContext<UseCommentsType>(initalCommentsContextValues)

const PostDetailsPage = () => {
  const { postId } = useLocalSearchParams<{ postId: string }>();
  const useCommentsData = useComments(postId);

  const {
    postData,
    postIsLoading,
    postRefetch,
    postIsFetching,
    postError,
    postIsError,
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
    return (<View>
      <ThemedText>posts is Loading...</ThemedText>
    </View>)
  }
  if (useCommentsData.commentsIsError) {
    return (<View>
      <ThemedText>posts has Error</ThemedText>
    </View>)
  }
  return (
    <CommentsContext.Provider value={{ ...useCommentsData }}>
      <FlatList
        data={useCommentsData.commentsData}
        renderItem={({ item }: { item: Comment }) => (<PostComment {...item} />)}
        keyExtractor={(item: Comment) => item.id.toString()}
        ListHeaderComponent={() => (
          <View>
            <ParallaxScrollView
              headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
              headerImage={
                <Image
                  source={{
                    uri: postData?.cover_url
                  }}
                  style={styles.reactLogo}
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
            <ThemedText type='subtitle'>Comments</ThemedText>
          </View>
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
        headerTitle: postData?.title,
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
