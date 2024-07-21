import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: colors?.dark,
    justifyContent: "space-around",
    alignItems: "center"
  },
  contentTitleMain: {
    flexDirection: "row"
  },
  firstTitleMain: {
    fontSize: 33
  },
  secondTitleMain: {
    fontSize: 33,
    fontWeight: 700
  },
  textButton: {
    textDecorationLine: "underline",
    color: colors.gray_100,
    fontSize: 22
  }
})