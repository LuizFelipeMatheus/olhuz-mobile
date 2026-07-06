import { COLORS } from '../src/presentation/theme/AppTheme';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";


interface ButtonTutorialsProps {
    onPress?: () => void;
    title: string;
    textColor: string;
    bgColor: string;
}

export const ButtonTutorials = ({ onPress, title, textColor, bgColor }: ButtonTutorialsProps) => {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={[styles.btnTxt, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        maxWidth: 171,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
      fontFamily: 'Open Sans',
        fontWeight: 'bold',
        width: 171,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,

    }
});