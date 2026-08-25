import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// Importação de componentes
import { COLORS } from "../../theme/AppTheme";
import { ButtonCard } from "../../../components/ButtonCard";
// Importação da estilização
import styles from "../../theme/HomeStyles";

import { Aperture, ImageUp } from "lucide-react-native";
import { InfoCard } from "../../../components/InfoCard";

import { pickDocumentOrImage } from "../../../utils/pickDocumentOrImage";
import { takePhoto } from "../../../utils/takePhoto";
import { RootStackParamList } from "../../../types/navigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  // Função para tirar foto
  const handleTakePhoto = async () => {
    const photo = await takePhoto();

    // Verifica se uma foto foi tirada
    if (photo) {
      // Navega para a tela de detalhes da leitura passando a foto tirada
      navigation.navigate("ReadingDetails", {
        item: {
          fileUri: photo.uri,
          fileName: photo.name,
          title: photo.name,
          uploadDate: new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          type: "Imagem",
        },
      });
    }
  };

  // Função para selecionar um arquivo
  const handleOpenFile = async () => {
    const selectedFile = await pickDocumentOrImage();
    // Verifica se um arquivo foi selecionado
    if (selectedFile) {
      // Mapeia o nome legível do tipo para exibir no card da ReadingDetails
      const typeLabel =
        selectedFile.type === "image"
          ? "Imagem"
          : selectedFile.type === "pdf"
            ? "Documento"
            : "Arquivo";

      // Navega para a tela de detalhes da leitura passando o arquivo selecionado
      navigation.navigate("ReadingDetails", {
        item: {
          fileUri: selectedFile.uri,
          fileName: selectedFile.name,
          fileSize: selectedFile.size
            ? `${(selectedFile.size / 1024).toFixed(1)} KB`
            : undefined,
          title: selectedFile.name,
          uploadDate: new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          type: typeLabel,
        },
      });
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bgLight }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Olá,
            <Text style={styles.name}> seu_nome</Text>
          </Text>
          <Text style={styles.description}>
            Selecione uma das opções abaixo para começar
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <ButtonCard
            IconComponent={Aperture}
            iconColor={COLORS.yellow}
            title="Tirar foto"
            description="Abra a câmera e capture sua imagem."
            bgColorOne={COLORS.yellowExtraLight}
            bgColorTwo={COLORS.yellowLight}
            onPress={handleTakePhoto}
          />

          <ButtonCard
            IconComponent={ImageUp}
            iconColor={COLORS.green}
            title="Escolher arquivo"
            description="Selecione um arquivo."
            bgColorOne={COLORS.greenExtraLight}
            bgColorTwo={COLORS.greenLight}
            onPress={handleOpenFile}
          />
        </View>
        <View style={styles.infoContainer}>
          <InfoCard description="Suas imagens são processadas com segurança e pricacidade." />
        </View>
      </View>
    </ScrollView>
  );
};
