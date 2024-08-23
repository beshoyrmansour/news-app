import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import { useLocalSearchParams } from 'expo-router';
import useComments from '@/hooks/useComments';
import { initalCommentsContextValues, UseCommentsType } from '@/types/comments';
import { ThemedText } from '@/components/ThemedText';
export const CommentsContext = createContext<UseCommentsType>(initalCommentsContextValues)

const PostDetailsPage = () => {
  const { postId } = useLocalSearchParams<{ postId: string }>();
  const useCommentsData = useComments(postId);



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

      <View>
        <Text>PostDetailsPage</Text>
      </View>
    </CommentsContext.Provider>
  )
}

export default PostDetailsPage

const styles = StyleSheet.create({})