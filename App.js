import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Scan from "./src/screens/Scan";
import Navigation from "./src/screens/Navigation";
import ListProducts from "./src/screens/ListProducts";
import CheckOut from "./src/screens/CheckOut";
import SuccessScreen from "./src/screens/SuccessScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="listproducts"
          component={ListProducts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkout"
          component={CheckOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="successcreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
