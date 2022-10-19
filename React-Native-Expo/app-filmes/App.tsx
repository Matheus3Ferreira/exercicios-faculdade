import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListFilms from './src/screens/ListFilms'
import ShowFilm from './src/screens/ShowFilm'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListFilms" component={ListFilms} />
        <Stack.Screen name="ShowFilm" component={ShowFilm} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}