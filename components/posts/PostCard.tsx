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
  const borderThemeColor = useThemeColor({ light: '#A90082', dark: '#ff55d7' }, 'border');
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
      <ThemedView style={{ ...styles.card, }}>
        <ThemedView style={{ ...styles.cardBody, borderBottomColor: borderThemeColor }}>
          <ThemedView style={styles.cardText}>
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedText numberOfLines={2} ellipsizeMode='tail' type="defaultSemiBold">{body}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.cardIcon}>
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
    margin: 12,
    //marginBottom: 16,
    borderBottomWidth: 1,
    
  },
  
  cardBody: {
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  cardText: {
    flex: 1
  },
  cardIcon: {
    width: 33
  }
});
