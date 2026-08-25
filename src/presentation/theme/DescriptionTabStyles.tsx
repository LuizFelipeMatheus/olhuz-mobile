import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    gap: 12,
  },
  descriptionContainer: {
    width: "100%",
    backgroundColor: COLORS.white,
    alignItems: "stretch",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 10,
    shadowColor: COLORS.black,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    gap: 12,
  },
  descriptionHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.black,
  },
  listenButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
  },
  listenButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0C59D6",
  },
  description: {
    fontSize: 17,
    fontWeight: "400",
    color: "#464646",
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  info: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 14,
    gap: 16,
    marginBottom: 12,
  },
  infoContainer: {
    width: "100%",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingBottom: 10,
    paddingHorizontal: 6,
    marginBottom: 10,
  },
  infoText: {
    gap: 4,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.black,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "400",
    color: "#56595C",
  },
  optionsContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  optionItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#222225",
  },
});

export default styles;
