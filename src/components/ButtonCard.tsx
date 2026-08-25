import React from "react";
import { COLORS } from "../presentation/theme/AppTheme";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, Icon } from "lucide-react-native";

interface ButtonCardProps {
  IconComponent: React.ComponentType<{ size: number; color: string }>;
  iconColor: string;
  title: string;
  description: string;
  bgColorOne: string;
  bgColorTwo: string;
  onPress: () => void;
}

export const ButtonCard = ({
  IconComponent,
  iconColor,
  title,
  description,
  bgColorOne,
  bgColorTwo,
  onPress,
}: ButtonCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.btn} onPress={onPress}>
      <LinearGradient
        colors={[bgColorOne, bgColorTwo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradientFill, {borderColor: iconColor}]}>
        <View style={styles.btnContent}>
          <View style={styles.iconContainer}>
            <IconComponent size={60} color={iconColor} />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.btnTitle}>{title}</Text>
            <Text style={styles.btnDescription}>{description}</Text>
            <View style={styles.bgArrow}>
              <ArrowRight size={26} color={COLORS.txtDark} />
            </View>
        </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "100%",
    maxWidth: 600,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  gradientFill: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
  },
  btnContent: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    borderRadius: "50%",
    padding: 14,
  },
  txtContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    flexShrink: 1,
    position: "relative",
  },
  btnTitle: {
    color: COLORS.txtDark,
    fontSize: 20,
    fontWeight: "bold",
  },
  btnDescription: {
    color: COLORS.txtGray,
    fontSize: 18,
  },
  bgArrow: {
    position: "absolute",
    bottom: -20,
    right: 0,
    backgroundColor: COLORS.white,
    borderRadius: "50%",
    padding: 4,
  },
});
