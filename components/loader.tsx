import { useThemeColor } from "@/hooks/useThemeColor";
import { View, ActivityIndicator, Dimensions, Platform, StyleSheet } from "react-native";
type Props = {
  isLoading: boolean
}
const Loader = ({ isLoading }: Props) => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;
  const brandColorThemeColor = useThemeColor({ light: '', dark: '' }, 'tint');

  if (!isLoading) return null;

  return (
    <View
      style={{
        ...styles.loader,
        height: screenHeight,
      }}
    >
      <ActivityIndicator
        animating={isLoading}
        color={brandColorThemeColor}
        size={osName === "ios" ? "large" : 50}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    gap: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
});
