import { SafeAreaView, StyleSheet, View } from "react-native";
import { styles } from "./styles";
import { IContainer } from "./interface";

export function Container({children, props, style}: IContainer) {

  return(
    <SafeAreaView
      style={styles.safeArea}
    >
      <View
        style={[styles.container, style]}
        {...props}
      >{children}</View>
    </SafeAreaView>
  )
}