import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.genderButton,
        height: 140,
        width: '50%',
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPress: {
        backgroundColor: '#563e82',
    },
    btnNormal: {},
    titleButton: {
        color: theme.colors.titleButtons,
        fontSize: 18,
        fontFamily: theme.fonts.titleButtons300,
    },
})