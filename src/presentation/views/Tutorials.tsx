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
        <Image style={styles.img} source={require("../../../assets/img/vector.png")}/>
        <Text style={styles.leg}>Toque duplo: selecionar</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.btnUp}>Pular</TouchableOpacity>
      <TouchableOpacity style={styles.btnRepeat}>Repetir</TouchableOpacity>    
      <TouchableOpacity style={styles.btAdvance}>Avançar</TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
  
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000066", 
    textAlign: "center",
    marginBottom: 50,
    paddingBottom:20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  leg: {
    maxWidth: "80%",
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 24,
  },
  img: {
    width: 190,
    height: 190,
    resizeMode: "contain",
    
   },
  btnUp: {
    backgroundColor: "#E0E0E0", 
    width: "300%",
    height: 50,
    fontSize: 22,
    borderRadius: 25,
    justifyContent:"center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginLeft: "4%",
    
  },
  btnRepeat: {
    backgroundColor: "#D94B06", 
    color: COLORS.white,
    width: "300%",
    height: 50,
    fontSize: 22,
    borderRadius: 25,
    justifyContent:"center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginRight: "4%",
    marginTop: -50, 
  
  },
  btAdvance: {
    backgroundColor: "#000099",  
    color: COLORS.white,
    width: "300%",
    height: 50,
    fontSize: 22,
    borderRadius: 25,
    justifyContent:"center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
});

export default Tutorials;