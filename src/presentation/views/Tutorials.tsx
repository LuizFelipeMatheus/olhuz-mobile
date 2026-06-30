import React, { useState } from "react";
import { COLORS } from './../theme/AppTheme';
import {
  View, Text, Image, StyleSheet, ToastAndroid, Platform, TouchableOpacity,
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 19, // Margem lateral exata do Figma
    paddingTop: 50,
    paddingBottom: 49, // Espaçamento exato do botão avançar até o fim da tela
  },
  title: {
    /*fontFamily: 'Open Sans',*/
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00008B', // Azul escuro oficial
    textAlign: 'center',
    marginTop: 16,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  img: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  leg: {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 15,
    maxWidth: '85%',
    fontSize: 23,
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 49,
  },
  btnUp: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    width: 171,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,

  },
  btnRepeat: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    width: 171,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DD4A00',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: COLORS.white,
  },
  btnAdvance: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00008B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
    color: COLORS.white,
  },
});
export default Tutorials;