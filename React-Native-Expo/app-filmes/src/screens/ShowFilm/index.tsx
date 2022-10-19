import React from 'react';
import { Text, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

type Props = {
  route: any;
}

export default function ShowFilm( {route}: Props ) {
  const {nome, sinopse} = route.params;
  return (
      <View style={styles.container}>
          <Title />
          <Text style={styles.title}>{nome}</Text>
          <View style={styles.contentContainer}>
            <Text>{sinopse}</Text>
          </View>
      </View>
  );
}