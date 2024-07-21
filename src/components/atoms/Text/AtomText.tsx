import React from "react";
import { Text } from "react-native";
import { AtomTextStyles } from "./styles";
import { IThemeText } from "./interfaces";

export function AtomText({styles, props, text}: IThemeText) {

  return (
    <Text
      style={[AtomTextStyles?.text, styles]}
      {...props}
    >
      {text}
    </Text>
  )
}