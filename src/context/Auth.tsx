import React, { useContext, useEffect } from 'react' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState } from 'react';

interface AuthDataProps {
  token: string,
  email: string, 
  name: string,
}

interface AuthContextProps {
  authData?: AuthDataProps,
  signIn: (email: string, senha: string) => void,
  signOut: () => Promise<void>,  
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState<AuthDataProps>();

  useEffect(() => {
    loadFromStorage();
  },[])

  async function loadFromStorage(){
    const auth = await AsyncStorage.getItem("@Auth");
    if(auth){
      setAuthData(JSON.parse(auth) as AuthDataProps);
    }
  }

  async function signIn(email: string, senha: string) {
    // construir aqui integração com API

    // const auth = await fetch("https://facebook.com")
    // .then(response => response.json())
    // .then(data => {

    // }).catch(error => console.log(error));
    // setAuthData(auth);
    // AsyncStorage.setItem("@AuthData", JSON.stringify(auth))
  }
  function signOut(): Promise<void>{
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
    return
  }

  return(
    <AuthContext.Provider value={{
      authData, signIn, signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}