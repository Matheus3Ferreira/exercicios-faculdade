import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import ButtonGender from '../../components/ButtonGender';
import PersonalChar from '../../components/PersonalChar';
import Height from '../../components/Height';
import BtnCalculate from '../../components/BtnCalculate';

export default function Home() {
    const [isPress, setIsPress] = React.useState(0);
    const [weight, setWeight] = React.useState(40);
    const [age, setAge] = React.useState(15);
    const [height, setHeight] = React.useState(120);

    return (
        <View style={styles.container}>
            <View style={styles.paddingContainer}>

                <StatusBar
                    style="light"
                    translucent={true}

                />

                <View style={styles.header}>

                    <Text style={styles.title}>CALCULADORA IMC</Text>

                </View>


                <View style={styles.rowButtons}>

                    <ButtonGender iconName="mars" titleButton="Homem" pressed={() => { setIsPress(1) }} status={isPress == 1 ? true : false} />
                    <ButtonGender iconName="venus" titleButton="Mulher" pressed={() => { setIsPress(2) }} status={isPress == 2 ? true : false} />

                </View>


                <Height heightValue={height} setHeightValue={setHeight} />

                <View style={styles.rowButtons}>
                    <PersonalChar titleButton="Peso" value={weight} setValue={setWeight} subtitle="Kg" />
                    <PersonalChar titleButton="Idade" value={age} setValue={setAge} />
                </View>

            </View>


            <BtnCalculate weightValue={weight} ageValue={age} heightValue={height} />

        </View >

    );
}