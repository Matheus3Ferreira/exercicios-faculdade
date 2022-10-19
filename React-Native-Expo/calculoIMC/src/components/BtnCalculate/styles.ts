import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 65,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButton: {
        fontFamily: theme.fonts.title400,
        fontSize: 24,
        color: theme.colors.white,
    }
})