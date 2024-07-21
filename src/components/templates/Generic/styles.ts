import { StyleSheet, View } from "react-native";
import { colors } from "../../../theme/colors";

export const DefaultStyles = StyleSheet.create({
  View: {
    backgroundColor: colors?.dark,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-around"
  },
  textLong: {
    fontSize: 22,
    color: colors?.gray_100,
    textAlign: "center"
  },
  button: {
    height: 54,
    borderRadius: 18,
    borderColor: colors?.gray_300,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddin: "100%"
  }
})