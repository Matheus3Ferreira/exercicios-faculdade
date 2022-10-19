import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcoolValue: 0,
      gasolineValue: 0,
      result: 0,
    }
  }


  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.title}> Alcool ou Gasolina</Text>
        
        <Image
          style={styles.img}
          source={{ uri: 'https://www.0800bancos.com.br/wp-content/uploads/2019/08/postos-ipiranga.png' }}
        />

        <View style={styles.containerInput}>
            <Text style={styles.tipoDinheiro}>Alcool: R$</Text>
          <TextInput style={styles.input} placeholder="Preço do alcool" keyboardType='numeric' onChangeText={(numero) => this.setState({ alcoolValue: (numero) })}></TextInput>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.tipoDinheiro}>Gasolina: R$</Text>
          <TextInput style={styles.input} placeholder="Preço da gasolina" keyboardType='numeric' onChangeText={(numero) => this.setState({ gasolineValue: (numero) })}></TextInput>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => { this.setState({ result: this.state.alcoolValue / this.state.gasolineValue }) }}
        >
          <Text>Qual é melhor?</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{this.state.result == 0 ? 'Insira os valores e aperte no botão' :
          this.state.result < 0.7 ? 'Alcool' : 'Gasolina'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1d744',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 24
  },
  img: {
    width: 150,
    height: 70,
    marginVertical: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#d1d1d1',
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#1bff0a',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },
  result: {
    fontSize: 24,
  },
  containerInput: {
    height: 50,
    width: '100%',
    backgroundColor: '#d1d1d1',
    marginVertical: 25,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  tipoDinheiro: {
    marginHorizontal: 5,
  },
});
