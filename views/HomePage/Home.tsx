import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";
import { LogIn, UserPlus } from "lucide-react-native";

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const entrar = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Bem-vindo{"\n"}ao Olhuz
        </Text>

        <Text style={styles.subtitle}>
          Sua plataforma inteligente para gerenciar imagens com segurança e
          praticidade.
        </Text>
      </View>

      <View style={styles.bottomCard}>

        {/* Botão Entrar */}
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={entrar}
        >
          <LogIn
            size={24}
            color="#FFFFFF"
            strokeWidth={2.9}
  
          />

          <Text style={styles.txtBtn}>
            Entrar
          </Text>
        </TouchableOpacity>

      
        <View style={styles.separator}>
          <View style={styles.line} />

          <Text style={styles.separatorText}>
            ou
          </Text>

          <View style={styles.line} />
        </View>

        {/* Botão Criar Conta */}
        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <UserPlus
            size={24}
            color="#FFFFFF"
            strokeWidth={2.5}
          />

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
    </ImageBackground>
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
    width: 230,
    height: 150,
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
    flexDirection: "row",
  },

  btnCadastrar: {
    backgroundColor: "#0B166D",
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  txtBtn: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    alignSelf: "center",

  },

  separator: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginVertical: 20,
    alignSelf: "center",
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#C8C8C8",
  },

  separatorText: {
    marginHorizontal: 15,
    color: "#888",
    fontSize: 14,
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