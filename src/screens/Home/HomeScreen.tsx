import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { View, Text } from "react-native";
import { useAuth } from "../../context/Auth";


export function HomeScreen(){
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => signOut()}>  
        <Text style={styles.buttonText} >Sair do APP</Text>
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    maxWidth: 300,
    width: "100%",
    backgroundColor: '#3d44a3',
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  }
});