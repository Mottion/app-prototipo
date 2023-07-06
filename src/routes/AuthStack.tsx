import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "../screens/SignIn/SignInScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStack(){
  return(
    <Navigator screenOptions={{headerShown: false}} >
      <Screen name="Signin" component={SignInScreen} />
    </Navigator>
  )
}