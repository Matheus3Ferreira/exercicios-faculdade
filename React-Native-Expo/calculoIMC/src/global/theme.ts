import { StyleSheet } from 'react-native';

export const theme = {
    colors: {
        backgroundApp: '#110229',
        line: '#0c031c',
        white: '#FFFFFF',
        backgroundButtons: '#3e3d57',
        titleButtons: '#C7C7CD',
        genderButton: '#201436',

    },
    fonts: {
        number700: 'Rubik_700Bold',
        titleButtons300: 'Rubik_300Light',
        title400: 'Rubik_400Regular'
    }
}

export const componentsTheme = StyleSheet.create({
    titleButton: {
        color: theme.colors.titleButtons,
        fontSize: 18,
        fontFamily: theme.fonts.titleButtons300,
    },
    numbers: {
        color: theme.colors.white,
        fontFamily: theme.fonts.number700,
        fontSize: 42,
    },
})