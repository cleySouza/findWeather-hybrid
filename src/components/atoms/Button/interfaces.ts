import { ReactNode } from "react";
import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface IButtonProps {
  children?: ReactNode;
  buttonProps?: TouchableOpacityProps;
  styles?: ViewStyle;
}