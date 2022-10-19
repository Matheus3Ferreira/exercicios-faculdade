import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles'

function Button({title,type,onPress}) {

    return(
        <TouchableOpacity onPress={onPress}
         style={[styles.container,styles[type] ]}>
            <Text style={[styles.title,styles[type]]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button