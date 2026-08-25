import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 100
    },
    header: {
        gap: 10,
        width: "70%",
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: COLORS.txtDark,
    },
    name: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.txtDark,
    },
    description: {
        fontSize: 16,
        color: COLORS.txtGray,
    },
    cardContainer: {
        flex: 1,
        width: "100%",
        gap: 40,
        marginVertical: 30,
    },
    infoContainer: {
        width: "100%",
        alignItems: "center",
    },
})

export default styles;