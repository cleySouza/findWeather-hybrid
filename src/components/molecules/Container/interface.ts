import { ReactNode } from "react";
import { ViewProps, ViewStyle } from "react-native";

export interface IContainer {
  children: ReactNode;
  props?: ViewProps;
  style?: ViewStyle;
}