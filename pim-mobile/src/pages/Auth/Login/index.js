import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/Input'
import { Title } from '../../../styles/global'

function Login({ navigation }) {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.conteudo}>
        <View style={styles.title}>
          <Title>Faça Login</Title>
          <Text>Entre ou faça um conta agora mesmo!</Text>
        </View>
        <View>
          <Input title="Email" type="inverted"></Input>
          <Input title="Senha" type="inverted"></Input>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button onPress={() => navigation.navigate("Home")} title="Entrar" type="normal"></Button>
        <Button onPress={() => navigation.navigate("Cadastro")} title="Cadastre-se" type="inverted"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  conteudo: {
    padding: 25
  },
  title: {
    marginBottom: 40
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10
  }
});


export default Login