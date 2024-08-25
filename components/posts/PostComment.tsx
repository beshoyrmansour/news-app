import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Comment } from "@/types/comments";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import PostUser from "./PostUser";
type Props = Comment
const PostComment = ({
  body,
  email,
  name,
  postId
}: Props) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">{name}</ThemedText>
      <ThemedView style={styles.user}>
        <ThemedText>by</ThemedText>
        <PostUser postId={postId.toString()} />
      </ThemedView>
      <ThemedText>
        {body}
      </ThemedText>
      <ThemedText type="link">
        {email}
      </ThemedText>

    </ThemedView>
  );
};

export default PostComment;

const styles = StyleSheet.create({
  container: {
    gap: 1,
    marginBottom: 22,
    marginRight: 32,
    marginLeft: 32,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 3,
  }
});
