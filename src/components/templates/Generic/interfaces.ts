import { ImageProps, TextProps, TextStyle, ButtonProps, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";

export interface IGenericProps {
  title?: ITitleProps;
  image?: ImageProps;
  textCenter?: ITextCenterProps;
  longText?: ILongTextProps;
  button?: IButtonProps;
  textButton?: ButtonProps;
  containerProps?: IContainerProps;
}

interface IContainerProps {
  props?: ViewProps;
  style?: ViewStyle;
}

interface ITitleProps {
  text: string;
  text2?: string;
  style: TextStyle;
  style2?: TextStyle;
}

interface ITextCenterProps {
  text?: string;
  props?: TextProps;
  styles?: TextStyle;
}

interface ILongTextProps {
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  props?: TextProps;
  styles?: TextStyle;
  styles2?: TextStyle;
  styles3?: TextStyle;
  styles4?: TextStyle;
  styles5?: TextStyle;
  viewProps?: ViewStyle;
}

interface IButtonProps {
  props?: TouchableOpacityProps;
  style?: ViewStyle,
  text?: string;
}