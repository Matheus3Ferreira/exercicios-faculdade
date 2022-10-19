import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 40,
    },
    counterContainer: {
        borderWidth: 1,
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50,
    },
    counter: {
        fontSize: 68,
    },
    buttonsContainer: {
        width: '100%',
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    operator: {
        fontSize: 40,
        color: "white",
    },
})