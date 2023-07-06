import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {StyleSheet} from 'react-native';
import { View, Text, TextInput } from "react-native";
import { useAuth } from "../../context/Auth";


export function SignInScreen(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {signIn} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >SignIn</Text>
      <TextInput style={styles.input} placeholder="email" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword}/>
      <TouchableOpacity style={styles.button} onPress={() => signIn(email, password)}>
        <Text style={styles.buttonText} >Acesse o APP</Text>
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
  title: {
    color: "#3d44a3",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderRadius: 8,
    borderColor: "#1d013f",
    paddingHorizontal: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginBottom: 16,
    maxWidth: 300,
    color: "#656464f5",
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