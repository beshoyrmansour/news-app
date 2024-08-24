import { Post } from "@/types/posts";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

type Props = Post;
const PostCard = ({ body, id, title }: Props) => {
  const iconThemeColor = useThemeColor({ light: '', dark: '' }, 'tint');
  return (
    <TouchableOpacity
      style={{
        maxWidth: 400,
      }}
      key={id}
      onPress={() => {
        router.push(`/(posts)/${id}`);
      }}
    >
      <ThemedView style={styles.card}>
        <ThemedView style={styles.cardLikeWrapper}>
        </ThemedView>
        <ThemedView style={styles.cardBody}>
          <ThemedView style={styles.cardHeader}>
            <ThemedView>
              <ThemedText type="subtitle">{title}</ThemedText>
              <ThemedText numberOfLines={2} ellipsizeMode='tail' type="defaultSemiBold">{body}</ThemedText>
            </ThemedView>
            <FontAwesome
              color={iconThemeColor}
              name="chevron-right"
              solid={false}
              size={22}
              style={{ marginBottom: 2 }}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    position: "relative",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  cardLikeWrapper: {
    position: "absolute",
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardBody: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
});
