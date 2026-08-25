import React from "react";
import { ScrollView, View, Text } from "react-native";
import {
  Volume2,
  File,
  Calendar,
  Package2,
  Copy,
  Share2,
  Trash2,
} from "lucide-react-native";

import styles from "../../../theme/DescriptionTabStyles";
import { COLORS } from "../../../theme/AppTheme";

interface DescriptionTabProps {
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
  descriptionText?: string;
}

export const DescriptionTab = ({
  fileName,
  fileSize,
  uploadDate,
  descriptionText,
}: DescriptionTabProps) => {
  return (
    <View style={styles.mainWrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: COLORS.white}}  contentContainerStyle={{ flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionHeader}>
              <Text style={styles.title}>Descrição</Text>
              <View style={styles.listenButton}>
                <Volume2 size={22} color={"#0C59D6"} strokeWidth={1.4} />
                <Text style={styles.listenButtonText}>Ouvir</Text>
              </View>
            </View>
            <Text style={styles.description}>
              {descriptionText || "Nenhuma descrição disponível."}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Informações do arquivo</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <File size={22} color={"#56595C"} strokeWidth={1.4} />
                <View style={styles.infoText}>
                  <Text style={styles.infoLabel}>Nome do arquivo</Text>
                  <Text style={styles.infoValue}>
                    {fileName || "Não informado"}
                  </Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Calendar size={22} color={"#56595C"} strokeWidth={1.4} />
                <View style={styles.infoText}>
                  <Text style={styles.infoLabel}>Data do upload</Text>
                  <Text style={styles.infoValue}>
                    {uploadDate || "Não informada"}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.infoItem,
                  {
                    borderBottomWidth: 0,
                    paddingBottom: 0,
                    marginBottom: 0,
                  },
                ]}
              >
                <Package2 size={22} color={"#56595C"} strokeWidth={1.4} />
                <View style={styles.infoText}>
                  <Text style={styles.infoLabel}>Tamanho do arquivo</Text>
                  <Text style={styles.infoValue}>
                    {fileSize || "Não informado"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.optionsContainer}>
            <View style={styles.optionItem}>
              <Volume2 size={26} color={"#0C59D6"} strokeWidth={1.4} />
              <Text style={[styles.optionLabel, { color: "#0C59D6" }]}>
                Ouvir descrição
              </Text>
            </View>
            <View style={styles.optionItem}>
              <Copy size={26} color={"#222225"} strokeWidth={1.4} />
              <Text style={styles.optionLabel}>Copiar texto</Text>
            </View>
            <View style={styles.optionItem}>
              <Share2 size={26} color={"#222225"} strokeWidth={1.4} />
              <Text style={styles.optionLabel}>Compartilhar</Text>
            </View>
            <View style={styles.optionItem}>
              <Trash2 size={26} color={"#E73338"} strokeWidth={1.4} />
              <Text style={[styles.optionLabel, { color: "#E73338" }]}>
                Excluir
              </Text>
            </View>
          </View>
    </View>
  );
};
