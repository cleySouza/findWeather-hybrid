import React from "react";
import { Button } from "react-native";
import { ITextButtonProps } from "./interface";

export function TextButton({props}: ITextButtonProps) {
  return <Button {...props}/>
}