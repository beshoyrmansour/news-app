import { Post } from "@/types/posts";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { UsersContext } from "@/app/(posts)/_layout";
import { User } from "@/types/user";
import { GetUserData } from "@/services/UsersService";

type Props = Post;
const PostCard = ({ body, id, title, userId }: Props) => {
  const iconThemeColor = useThemeColor({ light: '', dark: '' }, 'tint');
  const borderThemeColor = useThemeColor({ light: '#A90082', dark: '#ff55d7' }, 'border');
  const { usersData, getUserById } = useContext(UsersContext);
  const [user, setUser] = useState(usersData[userId])
  useEffect(() => {

    if (!usersData[userId]) {
      getUserById(id).then(user => {
        setUser(user);
      })
    }

  }, [])


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
      <ThemedView style={{ ...styles.card, borderBottomColor: borderThemeColor }}>

        <ThemedView style={{ ...styles.cardBody }}>
          <ThemedView style={styles.cardText}>
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedView style={{ paddingBottom: 6,  paddingTop:6}}>
              <ThemedText type="defaultSemiBold" style={{ color: iconThemeColor }}>{user?.name}</ThemedText>
              <ThemedText type="link">@ {user?.username}</ThemedText>
            </ThemedView>
            <ThemedText numberOfLines={2} ellipsizeMode='tail' type="default">{body}</ThemedText>
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
    alignItems: "baseline",
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
