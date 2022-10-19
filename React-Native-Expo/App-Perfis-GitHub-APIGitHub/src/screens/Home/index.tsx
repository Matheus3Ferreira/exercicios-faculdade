import React, {useState} from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from './style'

import api from '../../services/api';

interface GitProfileData {
    id: number;
    name: string;
    repos_url: string;
    created_at: string;
    followers: number; 
    following: number;
    avatar_url: string;
}

function Home() {
    const [perfil, setPerfil] = useState<GitProfileData | undefined>();
    const [perfDev, setPerfDev] = useState('');

    async function getApi(){
        const response = (await api.get(perfDev)).data as GitProfileData;
        setPerfil(response);
    }
        
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Perf_Dev
            </Text>

            <Image
                source={{ uri:  perfil?.avatar_url || 'https://st.depositphotos.com/1748335/1340/i/600/depositphotos_13408873-stock-photo-mean-bull.jpg'   }}
                style={styles.imageDev}
            />

            <View style={styles.containerData}>

                <View style={styles.row}>
                    <TextInput style={styles.input} placeholder="Digite o nome de usuário" onChangeText={user => setPerfDev(user)}/>
                    <TouchableOpacity style={styles.btn} onPress={getApi}>V</TouchableOpacity>  {/* Desculpa professor to com preguiça de importar icons */}
                </View>

                <View style={styles.row}>
                    <Text>Id: </Text>
                    <Text>{perfil?.id}</Text>
                </View>

                <View style={styles.row}>
                    <Text>Nome: </Text>
                    <Text>{perfil?.name}</Text>
                </View>

                <View style={styles.row}>
                    <Text>Repositorios: </Text>
                </View>
                <Text>{perfil?.repos_url}</Text>

                <View style={styles.row}>
                    <Text>Criado em: </Text>
                    <Text>{perfil?.created_at}</Text>
                </View>

                <View style={styles.row}>
                    <Text>Seguidores: </Text>
                    <Text>{perfil?.followers}</Text>
                </View>

                <View style={styles.row}>
                    <Text>Seguindo: </Text>
                    <Text>{perfil?.following}</Text>
                </View>
            </View>

        </View >
    )
}


export default Home;
