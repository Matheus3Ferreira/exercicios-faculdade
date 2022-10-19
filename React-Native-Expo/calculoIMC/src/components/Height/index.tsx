import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { componentsTheme, theme } from '../../global/theme';
import { styles } from './styles'

type Props = {
    heightValue: number,
    setHeightValue: any,
}

export default function Height({ heightValue, setHeightValue }: Props) {

    return (
        <View style={styles.containerHeight}>
            <Text style={componentsTheme.titleButton}>ALTURA</Text>
            <View style={styles.containerValueHeight}>
                <Text style={componentsTheme.numbers}>{heightValue}</Text><Text style={styles.metric}>cm</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={120}
                maximumValue={250}
                onValueChange={(value) => { setHeightValue(value) }}
                step={0.1}
            />
        </View>
    );
}