import React from 'react'
import { Image, Text } from 'react-native';
import { Between, MediumTextColor } from '../../styles/global';

function Main() {

    return (
        <Between style={{ marginBottom: 30, marginTop: 15 }}>
            <MediumTextColor>Andrei</MediumTextColor>
            <Image width={15} height={10} source={require('../../assets/logo.png')} />
        </Between>
    )

}

function Internal() {

    return (
        <Between style={{ marginBottom: 30, marginTop: 15 }}>
            <Text>Voltar</Text>
            <Text>Logo</Text>
        </Between>
    )

}



function InternalHeader({ type }) {

    const types = {
        main: Main,
        internal: Internal
    }

    return types[type || 'main']()

}

export default InternalHeader;