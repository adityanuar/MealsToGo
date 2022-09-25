import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {Text} from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import {ThemeProvider} from "styled-components/native";
import {theme} from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold
} from "@expo-google-fonts/lato";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {SafeArea} from "./src/components/utility/safe-area.component";
import {Ionicons} from "@expo/vector-icons";
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
import {LocationContextProvider} from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Maps: 'md-map'
}

const tabBarIcon = (iconName) => ({size, color}) => (<Ionicons name={iconName} size={size} color={color}/>);

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName)
  };
}

const Maps = () => {
  return (
    <SafeArea>
      <Text>Maps</Text>
    </SafeArea>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
              >
                <Tab.Screen name={'Restaurants'} component={RestaurantsScreen}/>
                <Tab.Screen name={'Maps'} component={Maps}/>
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style={"auto"}/>
    </>
  );
}
