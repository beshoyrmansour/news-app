import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { User } from '@/types/user';
import { PostsContext, UsersContext } from '@/app/(posts)/_layout';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = { postId: string }
/***
 * this Component Is responsible for finding the post user data by etheir finding it in users list or fetch it form backend
 */
const PostUser = ({ postId }: Props) => {
  const { usersData, getUserById } = useContext(UsersContext);
  const userNameThemeColor = useThemeColor({ light: '', dark: '' }, 'tint');

  const {
    postsData,
  } = useContext(PostsContext);

  const currentPost = postsData.find(p => p.id.toString() === postId)
  const [user, setUser] = useState<User | null>(currentPost ? usersData[currentPost.userId] : null)
  useEffect(() => {

    if (currentPost) {
      if (usersData[currentPost.userId]) {
        setUser(usersData[currentPost.userId]);
      } else {
        getUserById(currentPost?.userId).then(user => {
          setUser(user);
        })
      }
    }
  }, [])


  if (user) {
    return (<ThemedView style={{ paddingBottom: 6, paddingTop: 6 }}>
      <ThemedText type="defaultSemiBold" style={{ color: userNameThemeColor }}>{user?.name}</ThemedText>
      <ThemedText type="link">@{user?.username}</ThemedText>
    </ThemedView>)
  }
  return (
    <View>
      <Text>Loading User Data</Text>
    </View>
  )
}

export default PostUser

const styles = StyleSheet.create({})