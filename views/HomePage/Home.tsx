import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { HomeViewModel } from "./ViewModelHome";

export const HomeScreen = () => {
  const { entrar, criarConta } = HomeViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.content}>

       <Image
          source={require("../../assets")}
          style={styles.olhuzlogo.png} 
      />
        <Text style={styles.title}>
          Bem-vindo{"\n"}ao Olhuz
        </Text>

        <Text style={styles.subtitle}>
          Sua plataforma inteligente para gerenciar imagens com segurança e praticidade.
        </Text>

      </View>

      <View style={styles.bottomCard}>
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={entrar}
        >
          <Text style={styles.txtBtn}>
            Entrar
          </Text>
        </TouchableOpacity>

        <Text style={styles.ou}>ou</Text>

        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={criarConta}
        >
          <Text style={styles.txtBtn}>
            Criar conta
          </Text>
        </TouchableOpacity>

        <Text style={styles.termos}>
          Ao continuar, você concorda com nossos
        </Text>

        <Text style={styles.link}>
          Termos de Uso e Política de Privacidade
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FF",
    justifyContent: "space-between",
  },

  content: {
    alignItems: "center",
    marginTop: 120,
    paddingHorizontal: 30,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  title: {
    fontSize: 50,
    fontWeight: "700",
    color: "#0B166D",
    textAlign: "center",
    marginTop: 20,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
  },

  bottomCard: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    elevation: 8,

  },

  btnEntrar: {
    backgroundColor: "#169000",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  btnCadastrar: {
    backgroundColor: "#0B166D",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  txtBtn: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },

  ou: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
  },

  termos: {
    textAlign: "center",
    marginTop: 20,
    color: "#777",
  },

  link: {
    textAlign: "center",
    color: "#3D6DFF",
    marginTop: 5,
  },
});