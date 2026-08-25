import React from "react";
import { COLORS } from "../../theme/AppTheme";
import { Text, View, FlatList } from "react-native";
import styles from "../../theme/ReadingsStyles";
import { CalendarDays } from "lucide-react-native";
import { ReadingItem } from "../../../components/ReadingItem";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";

export const ReadingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const DATA = [
    { id: "1", type: "Tela", title: "Aplicativo X", uploadDate: "25 de julho de 2026", descriptionText: "Nenhuma descrição disponível." },
    {
      id: "2",
      type: "Documento",
      title: "Carteira de documentos...",
      uploadDate: "23 de julho de 2026", descriptionText: "Nenhuma descrição disponível."
    },
    { id: "3", type: "Foto", title: "Paisagem do sol", uploadDate: "22 de junho de 2026", descriptionText: `Esta imagem captura o momento de um nascer ou pôr do sol em uma praia tranquila, transmitindo sensações táteis, térmicas e acústicas:

      A Luz e o Calor: O sol está muito baixo no horizonte, quase tocando o mar, emitindo um brilho dourado e radiante. O céu está preenchido por nuvens leves pintadas em tons de laranja, âmbar e dourado, que transicionam para um azul-acinzentado no topo.
      A Água e o Som: O mar se estende pelo horizonte, refletindo o brilho do sol como um caminho de luz dourada sobre a água. As ondas parecem suaves e constantes, quebrando com calma na praia.
      A Areia e a Textura: Em primeiro plano, há uma ampla faixa de areia úmida e firme perto da água. A textura da areia revela pequenas imperfeições, grãos soltos e pequenas sombras projetadas pela luz inclinada do sol.
` },
    {
      id: "4",
      type: "Foto",
      title: "montanha de gelo",
      uploadDate: "22 de junho de 2026",
      descriptionText: "Nenhuma descrição disponível."
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View>
                <Text style={styles.title}>Leituras</Text>
                <Text style={styles.subtitle}>dos últimos 7 dias</Text>
              </View>
              <CalendarDays
                size={36}
                color={COLORS.txtDark}
                strokeWidth={1.4}
              />
            </View>
            <Text style={styles.description}>
              Acompanhe os arquivos que você visualizou recentemente
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ReadingItem
            onPress={() =>
              navigation.navigate("ReadingDetails", { item })
            }
            type={item.type}
            title={item.title}
            uploadDate={item.uploadDate}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};
