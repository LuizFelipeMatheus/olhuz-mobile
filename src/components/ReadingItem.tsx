import React from "react";
import { COLORS } from "../presentation/theme/AppTheme";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { File, ChevronRight } from "lucide-react-native";

interface ReadingItemProps {
  onPress: () => void;
  type: string;
  title: string;
  uploadDate: string;
  descriptionText?: string;
}

export const ReadingItem = ({ onPress, type, title, uploadDate, descriptionText }: ReadingItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={styles.iconContainer}>
          <File size={46} color={COLORS.txtBlue} strokeWidth={1.4} />
        </View>
        <View style={styles.content}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{uploadDate}</Text>
        </View>
      </View>
      <ChevronRight size={36} color={COLORS.txtBlue} strokeWidth={1.6} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.blueExtraLight,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 8,
  },
  type: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.txtBlue,
    backgroundColor: COLORS.blueExtraLight,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.txtDark,
  },
  date: {
    fontSize: 15,
    color: COLORS.txtGray,
  },
});
