import React from "react";
import { AtomText } from "../../atoms";
import { ITextType,  } from "./interfaces";
import { View } from "react-native";

export function TextTypes({text, text2, text3, text4, stylesText, viewProps}: ITextType,) {
  return (
    <View style={viewProps?.styles} {...viewProps?.props}>
      <AtomText text={text} styles={stylesText?.styles}/>
      {text2 && <AtomText text={text2} styles={stylesText?.styles2}/>}
      {text3 && <AtomText text={text3} styles={stylesText?.styles3}/>}
      {text4 && <AtomText text={text4} styles={stylesText?.styles4}/>}
    </View>
  )
}