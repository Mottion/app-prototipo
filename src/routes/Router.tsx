import React from "react";
import { NavigationContainer} from "@react-navigation/native"
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../context/Auth";


export function Routes(){
  const {authData} = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}