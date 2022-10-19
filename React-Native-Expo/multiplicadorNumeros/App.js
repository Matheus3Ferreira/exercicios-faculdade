import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.calcula = this.calcula.bind(this)  

    this.state = {
      result: 0,
      numberOne: 1,
      numberTwo: 1,
    };
  }

  calcula(){
    this.setState({result: this.state.numberOne * this.state.numberTwo})
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de Números</Text>
        
        <Text style={styles.inputTitle}>Digite o 1° numero:</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.indexContainer}>
            <Text style={styles.index}>1.</Text>
          </View>
          <TextInput 
          style={styles.input}
          keyboardType = 'numeric'
          onChangeText={  (texto) => this.setState({numberOne: texto})  }
          />
        </View>

        <Text style={styles.inputTitle}>Digite o 2° numero:</Text>

        <View style={styles.inputContainer}>
          <View style={styles.indexContainer}>
            <Text style={styles.index} >2.</Text>
          </View>
          <TextInput 
          style={styles.input}
          keyboardType = 'numeric'
          onChangeText={  (texto) => this.setState({numberTwo: texto})   }
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcula}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{this.state.result}</Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#121030'
  },

  title: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 30,
  },

  inputTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },

  indexContainer: {
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: '#8e8e8e',
  },

  index: {
    fontSize: 14,
    color: '#8e8e8e',
  },

  input: {  
    height: 60,
    backgroundColor: '#e6e6e6',
    paddingLeft: 15,
    fontSize: 16,
    width: '100%',
    borderRadius: 50,
  },

  inputContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 50,
    width: '100%',
  },

  button: {
    backgroundColor: '#352F96',
    height: 60,
    width: '100%',
    borderRadius: 50,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
  },

  containerResult: {},
  result: {
    color: '#FFFFFF', 
    marginVertical: 20,
    fontSize: 32,
  },
});
