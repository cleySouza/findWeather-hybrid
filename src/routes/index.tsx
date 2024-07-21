import { NavigationContainer } from "@react-navigation/native";
import { RoutersTabs, Routes } from "./routes";

export function Router() {
  return (
    <NavigationContainer>
      <Routes/>
      {/* <RoutersTabs/> */}
    </NavigationContainer>
  )
}