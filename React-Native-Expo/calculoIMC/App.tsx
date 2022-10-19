import React from 'react';
import Home from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_700Bold, Rubik_500Medium, Rubik_800ExtraBold } from '@expo-google-fonts/rubik';


export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_800ExtraBold,

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Home />
    );
  }
}