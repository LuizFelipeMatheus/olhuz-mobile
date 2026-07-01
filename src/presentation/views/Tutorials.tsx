import React, { useState } from "react";
import { COLORS } from './../theme/AppTheme';
import {
  View, Text, Image, StyleSheet, ToastAndroid, Platform, TouchableOpacity,
} from "react-native";

import styles from "./../../presentation/theme/TutorialsStyles";

export const Tutorials = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aprenda os Gestos Básicos</Text>
      <View style={styles.card}>
        <Image style={styles.img} source={require("../../../assets/img/swipe.png")} />
        <Text style={styles.leg}>Arrastar direita/esquerda: mover entre os itens</Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.img} source={require("../../../assets/img/Group.png")} />
        <Text style={styles.leg}>Toque duplo: selecionar</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnUp}>Pular</TouchableOpacity>
        <TouchableOpacity style={styles.btnRepeat}>Repetir</TouchableOpacity>
        <TouchableOpacity style={styles.btnAdvance}>Avançar</TouchableOpacity>
      </View>

    </View>
  );
};


export default Tutorials;