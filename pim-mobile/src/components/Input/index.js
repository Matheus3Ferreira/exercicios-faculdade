import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

function Input({ title, type }) {

    return (
        <View
            style={[styles.container, styles[type]]}>
            <Text>{title}</Text>
            <TextInput style={[styles.title, styles[type]]} />
        </View>
    )
}

export default Input