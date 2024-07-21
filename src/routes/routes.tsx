import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, OnboardingScreen, Search } from "../Screens"
import { colors } from "../theme/colors";
import Icon from "react-native-vector-icons/Octicons"
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={RoutersTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export function RoutersTabs() {
  return(
    <Tabs.Navigator
      initialRouteName="HomeEmpty"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if(route.name === 'HomeEmpty') {
            iconName = 'home'
          } else if (route.name === 'Search') {
            iconName = 'search'
          } else {
            iconName = route.name
          }

          return (
            <Icon 
              name={iconName} 
              size={30} 
              color={
                focused ? colors.white : colors.gray_100
              }
            />
          );
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: colors.white,
        tabBarLabel: ({color, focused}) => {
          let label;

          if (route.name === 'HomeEmpty') {
            label = 'Home';
          } else if (route.name === 'Search'){
            label = 'Busca'
          }

          return (
            <Text 
              style={{ 
                color, 
                marginLeft: 20,
                fontWeight: focused ? 700 : 300,
                fontSize: 16
              }}
            >
              {label}
            </Text>
          )
        },
        tabBarStyle: {
          backgroundColor: colors.dark,
          borderTopWidth: 0,
          paddingHorizontal: 80
        }
      })}
    >
      <Tabs.Screen 
        name="HomeEmpty" 
        component={Home} 
        options={{
          headerShown: false,
        }} 
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  )
}