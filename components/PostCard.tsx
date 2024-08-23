import { Post } from "@/types/posts";
import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = Post;
const PostCard = ({ body, id, title, user_id, cover_url }: Props) => {
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
      <View style={styles.card}>
        <View style={styles.cardLikeWrapper}>
        </View>
        <View style={styles.cardTop}>
          <Image
            alt=""
            resizeMode="cover"
            style={styles.cardImg}
            source={{
              uri:
                cover_url ??
                "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
            }}
          />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{title}</Text>
            <FontAwesome
              color="#aa0082"
              name="chevron-right"
              solid={false}
              size={22}
              style={{ marginBottom: 2 }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  content: {
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  /** Header */
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  headerTop: {
    marginHorizontal: -6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  /** Card */
  card: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardLikeWrapper: {
    position: "absolute",
    zIndex: 1,
    top: 12,
    right: 12,
  },
  cardLike: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardImg: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#232425",
    marginRight: "auto",
  },
  cardStars: {
    marginLeft: 2,
    marginRight: 4,
    fontSize: 15,
    fontWeight: "500",
    color: "#232425",
  },
  cardDates: {
    marginTop: 4,
    fontSize: 16,
    color: "#595a63",
  },
  cardPrice: {
    marginTop: 6,
    fontSize: 16,
    color: "#232425",
  },
});
