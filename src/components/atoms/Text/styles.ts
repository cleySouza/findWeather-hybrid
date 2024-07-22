import { StyleSheet } from "react-native";
import { theme } from "../../../theme/colors";

export const AtomTextStyles = StyleSheet.create({
  text: {
    color: theme?.colors?.white,
    fontSize: 20,
    fontFamily: theme?.font?.regular
  }
})