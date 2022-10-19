import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { componentsTheme } from '../../global/theme';

type Props = {
    titleButton: string,
    value: number,
    setValue: any,
    subtitle?: string,
}

export default function PersonalChar({ titleButton, value, setValue, subtitle }: Props) {
    return (
        <View style={styles.container}>
            <Text style={componentsTheme.titleButton}>{titleButton}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={componentsTheme.numbers}>{value}</Text>
            </View>
            <View style={styles.ButtonsContainer}>
                <TouchableOpacity style={styles.buttonOperation} onPress={() => setValue(value + 1)}><Text style={styles.operation}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonOperation} onPress={() => setValue(value - 1)}><Text style={styles.operation}>-</Text></TouchableOpacity>
            </View>
        </View>
    );
}