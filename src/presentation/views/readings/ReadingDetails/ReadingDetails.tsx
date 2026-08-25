import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowLeft, Calendar, Image as ImageIcon } from "lucide-react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

import { ChatTab } from "./ChatTab";
import { DescriptionTab } from "./DescriptionTab";
import { useReadingDetailsViewModel } from "../../../ViewModels/useReadingDetailsViewModel";

import styles from "../../../theme/ReadingsDetailsStyles";

const Tab = createMaterialTopTabNavigator();

const DEFAULT_IMAGE = require("../../../../../assets/img/por-do-sol-na-praia.jpg");

export const ReadingDetailsScreen = () => {
  const navigation = useNavigation();

  const {
    id,
    fileUri,
    title,
    type,
    fileName,
    fileSize,
    uploadDate,
    descriptionText,
  } = useReadingDetailsViewModel();

  const imageSource = fileUri ? { uri: fileUri } : DEFAULT_IMAGE;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeft size={36} color={"#0E0E0E"} strokeWidth={1.6} />
      </TouchableOpacity>

      <Text style={styles.title}>Leitura</Text>

      <View style={styles.readingDetailsHeader}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>

        <View style={styles.readingDetailsInfo}>
          <Text style={styles.readingDetailsTitle}>
            {title || "Título da leitura"}
          </Text>

          <View style={styles.readingDetailsInfoRow}>
            <Calendar size={20} color={"#56595C"} strokeWidth={1.4} />
            <Text style={styles.readingDetailsInfoText}>
              {uploadDate || "Data da leitura"}
            </Text>
          </View>

          <View style={styles.fileTypeRow}>
            <ImageIcon size={20} color={"#56595C"} strokeWidth={1.4} />
            <Text style={styles.fileTypeText}>{type || "Documento"}</Text>
          </View>
        </View>
      </View>

      <Tab.Navigator
        id="reading-details-tabs"
        screenOptions={{
          tabBarActiveTintColor: "#0C59D6",
          tabBarInactiveTintColor: "#A0A0A0",

          tabBarIndicatorStyle: {
            backgroundColor: "#0C59D6",
            borderRadius: 10,
            height: 3,
          },

          tabBarStyle: {
            backgroundColor: "#F5F5F5",
            borderRadius: 10,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            marginVertical: 12,
          },

          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: "600",
            textTransform: "none",
          },
        }}
      >
        <Tab.Screen name="Descrição">
          {() => (
            <DescriptionTab
              fileName={fileName}
              fileSize={fileSize}
              uploadDate={uploadDate}
              descriptionText={descriptionText}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Conversa" component={ChatTab} />
      </Tab.Navigator>
    </View>
  );
};
