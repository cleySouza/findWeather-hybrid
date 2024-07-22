import { StyleSheet } from "react-native";
import { theme } from "../../../theme/colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme?.colors.dark
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  }
})