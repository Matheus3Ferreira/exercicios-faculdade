import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3e3d57',
        height: 140,
        width: '49%',
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonsContainer: {
        flexDirection: 'row',
    },
    buttonOperation: {
        height: 35,
        width: 35,
        backgroundColor: '#7a7a7a',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    operation: {
        fontSize: 22,
        color: '#fff',
    },
    subtitle: {
        fontSize: 18,
        fontFamily: theme.fonts.titleButtons300,
        color: theme.colors.titleButtons,
        marginTop: 18,
        marginRight: 4,

    }

})