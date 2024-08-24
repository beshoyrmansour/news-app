import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Comment } from "@/types/comments";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
type Props = Comment
const PostComment = ({
  body,
  email,
  id,
  name,
  postId
}: Props) => {
  return (
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">{name}</ThemedText>
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
    gap: 8,
    marginBottom: 22,
    marginRight:32,
    marginLeft:32,
  },
});
