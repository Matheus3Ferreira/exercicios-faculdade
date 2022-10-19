import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './styles'

type Props = {
  movieSelected: any;
}

export default function Card( {movieSelected}: Props) {

  const navigation = useNavigation();
  
  return (
      <View style={styles.container}>
          <View style={styles.titleCardContainer}>
            <Text style={styles.title}>{movieSelected.nome}</Text>
            <Pressable onPress={() => navigation.navigate('ShowFilm', {nome: movieSelected.nome, sinopse: movieSelected.sinopse})}>
              <Text style={styles.readMore}>Saiba mais</Text>
            </Pressable>
          </View>
          <Image
            style={styles.imageMovie}
            source={{
            uri: movieSelected.foto
            }}
            />
      </View>
  );
}

