import React from "react";
import { TouchableOpacity } from "react-native";
import { IButtonProps } from "./interfaces";

export function AtomButton({children, buttonProps, styles}: IButtonProps) {
  return <TouchableOpacity style={styles} {...buttonProps}>{children}</TouchableOpacity>
}