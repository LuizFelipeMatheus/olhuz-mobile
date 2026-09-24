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
        width: 180,
        maxWidth: 180,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    
    btnTxt: {
      fontFamily: 'Open Sans',
        fontWeight: 'bold',
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,

                

    }
});