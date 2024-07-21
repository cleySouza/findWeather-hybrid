import { TextStyle, ViewProps, ViewStyle } from "react-native";

export interface ITextType {
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  stylesText?: ITextTypeThemes;
  viewProps?: IViewTypes;
}

interface ITextTypeThemes {
  styles?: TextStyle;
  styles2?: TextStyle;
  styles3?: TextStyle;
  styles4?: TextStyle;
}

interface IViewTypes {
  props?: ViewProps;
  styles?: ViewStyle;
}