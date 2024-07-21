import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";

export function Router() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}