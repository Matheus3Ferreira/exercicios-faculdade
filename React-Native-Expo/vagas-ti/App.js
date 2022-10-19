import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {

  const vagas = [
    {nome: 'Dev. Java Jr.', salario: 47600.58,imagem: 'https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg' ,contato: "13 92000-4406" , descricao: "Vaga de TI"},
    {nome: 'Dev. Mobile React Native Jr.', salario: 4000.58,imagem: 'https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg' ,contato: "13 92000-4406" , descricao: "Vaga de TI"},
    {nome: 'Estagio em Requisitos', salario: 40760.58,imagem: 'https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg' ,contato: "13 92000-4406" , descricao: "Vaga de TI"},
    {nome: 'Dev. da Quebrada', salario: 4090.58,imagem: 'https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg' ,contato: "13 92000-4406" , descricao: "Vaga de TI"},
    {nome: 'Dev. da Xuxa', salario: 666666.666,imagem: 'https://cdn.dicionariopopular.com/imagens/pai-de-familia-sucodelaranja.jpg' ,contato: "66 66666-6666" , descricao: "Vaga de TI"},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas</Text>
      <View style={styles.containerVagas}>
          <FlatList 
            data={vagas}
            keyExtractor={(vaga) => vaga.nome}
            renderItem={ (vaga) => <Vagas nome={vaga.item.nome} imagem={vaga.item.imagem} salario={vaga.item.salario} contato={vaga.item.contato} descricao={vaga.item.descricao} />}
            />
      </View>
    </View>
  );
}

function Vagas({nome, salario, contato, descricao, imagem}){
  console.log(salario)
  return (
    <View style={styles.vaga}>
      <Text style={styles.titleVaga}>{nome}</Text>
      <Text>Salário: $ {salario}</Text>
      <Text>Descrição: {descricao}</Text>
      <Text>Contato: {contato}</Text>
      <Image 
      style={styles.image}
      source={{uri: imagem}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  containerVagas: {
    width: '100%',
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  vaga: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  titleVaga: {
    fontSize: 24,
  }
})