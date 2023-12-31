import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStack(){
  return(
    <Navigator screenOptions={{headerShown: false}} >
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  )
}