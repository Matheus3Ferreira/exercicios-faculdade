import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../../components/Button'
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { Title } from '../../../styles/global';

function CadastroStep2({ navigation }) {

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.conteudo}>
        <View style={styles.title}>
          <Title>Crie sua conta</Title>
          <Text>Entre com seus dados de acesso</Text>
        </View>
        <View>
          <Input title="Nome Completo" type="inverted"></Input>
          <Input title="CPF" type="inverted"></Input>
          <Input title="Telefone" type="inverted"></Input>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button onPress={() => navigation.navigate("Home")} title="Proximo" type="normal"></Button>
        <Button onPress={() => navigation.navigate("Cadastro")} title="Voltar" type="inverted"></Button>
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

export default CadastroStep2