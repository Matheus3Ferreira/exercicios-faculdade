import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Auth/Login';
import Cadastro from './src/pages/Auth/Cadastro';
import CadastroStep2 from './src/pages/Auth/CadastroStep2';
import Home from './src/pages/Home';
import Reserva from './src/components/Reserva';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CadastroStep2"
          component={CadastroStep2} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Reserva"
          component={Reserva} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}