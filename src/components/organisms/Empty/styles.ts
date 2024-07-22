import { StyleSheet } from "react-native";
import { theme } from "../../../theme/colors";

export const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: theme?.colors?.dark,
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
    fontFamily: theme.font.bold
  },
  textButton: {
    textDecorationLine: "underline",
    color: theme?.colors.gray_100,
    fontSize: 22
  }
})