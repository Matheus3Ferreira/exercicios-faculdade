import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundApp,
    },
    paddingContainer: {
        paddingHorizontal: 15,
    },
    header: {
        marginTop: StatusBar.currentHeight || 0,
        paddingVertical: 20,
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: theme.colors.line,
    },
    title: {
        color: theme.colors.white,
        fontFamily: theme.fonts.title400,
        fontSize: 18,
    },
    rowButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})