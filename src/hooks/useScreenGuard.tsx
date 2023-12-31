import { useEffect, useState } from "react";
import {useNavigationState} from '@react-navigation/native';

export function useScreenGuard(screenName: string){
  const navigationState = useNavigationState(state => state);
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {

    if (sessionTime < 10){
      const timer = setTimeout(() => {
        setSessionTime(prevState => prevState + 1);
        console.log(sessionTime)
      }, 1000)

      return () => clearTimeout(timer);
    }else{
      if (navigationState.routes){
        const currentScreen = navigationState.routes[navigationState.index];

        if (currentScreen.name === screenName){
          console.log("Desbloquear tela")
        }
      }
    }
  },[sessionTime])
}