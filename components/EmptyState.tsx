import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  title: string;
  subtitle: string;
}
const EmptyState = ({ title, subtitle }: Props) => {
  return (
    <View style={
      styles.container
    } >
      {/*<Image
        source={images.empty}
        resizeMode="contain"
      />*/}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

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
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 270,
    height: 216
  },
  title: {

  },
  subtitle: {

  },
})