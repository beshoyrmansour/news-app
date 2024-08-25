import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import images from "@/constants/images";

type Props = {
  title: string;
  subtitle: string;
}
const EmptyState = ({ title, subtitle }: Props) => {
  const titleThemeColor = useThemeColor({ light: '', dark: '' }, 'Highlight');

  return (
    <View style={
      styles.container
    } >
      <Image
        source={images.empty}
        resizeMode="contain"
        style={styles.image}
      />

      <ThemedText type="subtitle" style={{ ...styles.title, color: titleThemeColor }}>{title}</ThemedText>
      <ThemedText type="default" style={{ ...styles.subtitle, }}>
        {subtitle}
      </ThemedText>

      {/*<CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/posts")}
        containerStyles="w-full my-5"
      />*/}
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 48,
    marginTop: 24
  },
  image: {
    width: '100%',
    maxWidth:300,
    height: 116,
  },
  title: {
    marginBottom:4,

  },
  subtitle: {

  },
})