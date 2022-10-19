import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, ScrollView  } from 'react-native';

export default function App() {

  const vendas = [
    {nome: 'Pão Cará', urlImage: 'https://www.comprerural.com/wp-content/uploads/2019/11/DSC_0390-2-640x486.jpg', descricao: "Lanche de TI"},
    {nome: 'Média', urlImage: 'https://i.pinimg.com/originals/e2/8a/48/e28a481ab1d0c186fe7ccad4975f5869.jpg', descricao: "Lanche de TI"},
    {nome: 'Pão Java Pleno.', urlImage: 'https://i.pinimg.com/originals/e2/8a/48/e28a481ab1d0c186fe7ccad4975f5869.jpg', descricao: "Lanche de TI"},
    {nome: 'Bolacha', urlImage: 'https://i.pinimg.com/originals/e2/8a/48/e28a481ab1d0c186fe7ccad4975f5869.jpg', descricao: "Lanche de TI"},
    {nome: 'Bolo da Xuxa', urlImage: 'https://i.pinimg.com/originals/e2/8a/48/e28a481ab1d0c186fe7ccad4975f5869.jpg', descricao: "Lanche de TI"},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anuncios</Text>
      <View style={styles.containerVagas}>
          <FlatList 
            data={vendas}
            keyExtractor={(venda) => venda.nome}
            renderItem={ (venda) => <Vagas nome={venda.item.nome} imagem={venda.item.urlImage} descricao={venda.item.descricao} />}
            horizontal={true}
            />
      </View>
    </View>
  );
}

function Vagas({nome, imagem, descricao}){
  return (
    <View style={styles.vaga}>
      <Image 
      style={styles.image}
      source={{uri: imagem,}}
      />
      <Text>{nome}</Text>
      <Text>Descrição: {descricao}</Text>
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
    height: '50%',
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  vaga: {
    height: '100%',
    width: 150,
    alignItems: 'center',
    borderWidth: 1, 
  },
  image: {
    width: 100,
    height: 100,
  }
})