import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, OnboardingScreen } from "../Screens"

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes() {
  return(
    <Navigator>
      <Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
      <Screen name="Home" component={Home} options={{headerShown: false}} />
    </Navigator>
  )
}