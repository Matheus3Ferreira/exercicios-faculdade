import React, { useState, useEffect } from 'react';

import { Text, View } from 'react-native';
import Card from '../../components/Card';
import Title from '../../components/Title';
import api from '../../service/api';
import  styles  from './styles'

export default function ListFilms() {

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    (async () => {
      const response = await api.get('');
      setMovies(response.data)
    })()
  }, [])

  return (
      <View style={styles.container}>
          <Title />

          {movies.map((movie: any, key: any) => (
          <Card key={key} movieSelected={movie}/> 
          ))}

          
      </View>
      
  );
}