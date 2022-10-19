import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus(){
    this.setState({ count: this.state.count + 1 });
  }
  
  minus(){
    this.state.count <= 0 ? alert("Não tem como ter gente negativa, seu doido.") : this.setState({ count: this.state.count - 1 });
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>Contador de Pessoas</Text>

        <View style={styles.counterContainer}>
          <Text style={styles.counter}> {this.state.count} </Text>
        </View>

        <Buttons operation='+' background='green' functionOp={this.plus}></Buttons>
        <Buttons operation='-' background='red' functionOp={this.minus}></Buttons>
      
      </View>
      );
    }
}
    
class Buttons extends Component {
  render(){
    return(
      <TouchableOpacity style={[styles.buttonsContainer, {backgroundColor: this.props.background}]} onPress={this.props.functionOp}>
          <Text style={styles.operator}>{this.props.operation}</Text>
      </TouchableOpacity>
    );
  }
}

