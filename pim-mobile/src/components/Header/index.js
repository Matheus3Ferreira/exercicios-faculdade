import React from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'
// import logo from ''
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
import { Constants } from 'expo';

function Header() {

    return (
        <View style={styles.content}>
            <View style={styles.actions}>
                <Text>
                    {'<'}
                </Text>
            </View>
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../../assets/header-svg.svg')} />
        </View>

    )

}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 96,
        marginBottom: -1
    },
    actions: {
        width: imageWidth,
        backgroundColor: '#ED5353',
        height: 40,
        marginTop: Platform.OS === 'ios' ? 0 : (Constants?.statusBarHeight || 0)
    },
    content: {
        backgroundColor: '#ED5353',
        borderBottomColor: '#fff',
    },

});


export default Header;