import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import Home from './src/screens/Home'

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_500Medium
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Home />
    );
  }
}