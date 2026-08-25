import React from "react";
import { COLORS } from "../presentation/theme/AppTheme";
import { Text, StyleSheet, View } from "react-native";
import { ShieldCheck } from "lucide-react-native";

interface InfoCardProps {
  description: string;
}

export const InfoCard = ({ description }: InfoCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <ShieldCheck size={36} color={COLORS.blue} />
          <View style={{ flex: 1}}>
            <Text style={styles.description}>{description}</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueExtraLight,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 480,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: COLORS.blueGray,
    borderRadius: 10,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
  description: {
    flexWrap: "wrap",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    color: COLORS.txtDark,
  },
});
