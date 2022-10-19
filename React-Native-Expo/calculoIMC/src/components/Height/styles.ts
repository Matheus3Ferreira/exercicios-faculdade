import { StyleSheet } from "react-native";
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
    containerHeight: {
        backgroundColor: theme.colors.backgroundButtons,
        height: 130,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    metric: {
        color: theme.colors.white,
        fontSize: 18,
        marginTop: 20,
    },
    containerValueHeight: {
        flexDirection: 'row',
    },
    slider: {
        width: 240,
    },
})