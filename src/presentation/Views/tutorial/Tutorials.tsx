import React from "react";
import { COLORS } from '../../theme/AppTheme';
import {
  View, Text, Image
} from "react-native";

import { ButtonTutorials } from "../../../../components/ButtonTutorials";
import styles from "../../theme/TutorialsStyles";

export const Tutorials = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprenda os Gestos Básicos</Text>
      <View style={styles.card}>
        <Image style={styles.img} source={require("../../../../assets/img/swipe.png")} />
        <Text style={styles.leg}>Arrastar direita/esquerda: mover entre os itens</Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.img} source={require("../../../../assets/img/Group.png")} />
        <Text style={styles.leg}>Toque duplo: selecionar</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.twobtn}><ButtonTutorials title="Pular" textColor="#000000" bgColor="#E0E0E0" />
          <ButtonTutorials title="Repetir" textColor="#FFFFFF" bgColor="#DD4A00" />
        </View>
        <ButtonTutorials title="Avançar" textColor="#FFFFFF" bgColor="#00008B" />
      </View>

    </View>
  );
};


export default Tutorials;