import React from "react";
import { CryptoDetail, Transaction } from "./src/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import Tabs from "./src/navigations/tabs";

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
