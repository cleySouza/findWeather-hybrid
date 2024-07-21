import React from "react";
import { Image } from "react-native";
import { IImageProps } from "./interface";

export function AtomImage({prop}:IImageProps) {
  return (
    <Image {...prop}/>
  )
}