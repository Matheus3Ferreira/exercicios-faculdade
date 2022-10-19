import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

type Props = {
    weightValue: number,
    ageValue: number,
    heightValue: number,
}


function result(resultValue: number): any {
    const Conditions = [
        { value: 16, status: 'Ta muito magro bixo.' },
        { value: 17, status: 'Ta magro, mas não muito não.' },
        { value: 18.5, status: 'Ta magrinho.' },
        { value: 25, status: 'Zika de mais, ideal.' },
        { value: 30, status: 'Maneirar só um pouquinho no doce, ta ótimo.' },
        { value: 35, status: 'Comece a se preocupar um pouco com sua saúde brow.' },
        { value: 40, status: 'Sinal de alerta, Uiuuuiiiuuuiiiuuu.' }
    ];

    return Conditions.map((element) => { return resultValue <= element.value ? element.status : element.value >= 40 ? 'VAI EXPLODIR' : '' }).find((value) => { return value != '' })

}

export default function BtnCalculate({ weightValue, heightValue }: Props) {

    return (
        <TouchableOpacity style={styles.container} onPress={() => { alert(result((weightValue / ((heightValue / 100) * (heightValue / 100))))) }}>
            <Text style={styles.titleButton}>CALCULAR</Text>
        </TouchableOpacity>
    );

}