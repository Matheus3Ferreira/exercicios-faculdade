import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';
import { componentsTheme } from '../../global/theme';

type Props = {
    iconName: any,
    titleButton: string,
    pressed: any,
    status: boolean,
}

export default function ButtonGender({ iconName, titleButton, pressed, status }: Props) {
    /*Setando o state*/

    return (
        <TouchableOpacity
            style={[styles.container, status == true ? styles.btnPress : styles.btnNormal]}
            onPress={pressed}
        >
            <FontAwesome name={iconName} size={54} color="white" />
            <Text style={componentsTheme.titleButton}>{titleButton}</Text>
        </TouchableOpacity>
    );
}