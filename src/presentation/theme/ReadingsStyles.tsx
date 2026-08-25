import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgLight,
        alignItems: "flex-start",
        paddingTop: 40,
        paddingBottom: 100,
    },
    header: {
        width: "100%",
        gap: 10,
        alignItems: "flex-start",
        paddingHorizontal: 30,
        marginBottom: 40
    },
    headerContent: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: COLORS.txtDark,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "400",
        color: COLORS.txtBlue,
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        color: COLORS.txtGray,
        width: "70%",
    },
    readingsContainer: {
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 20,
    },
})

export default styles;