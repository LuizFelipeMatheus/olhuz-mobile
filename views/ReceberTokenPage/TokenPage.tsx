import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { TokenViewModel } from "./ViewModelToken";

export function TokenScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { email, setEmail, enviarToken } = TokenViewModel(navigation);

  return (
    <View style={styles.container}>
      {/* VOLTAR */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* TÍTULO */}
      <Text style={styles.title}>Receber Token</Text>

      {/* DESCRIÇÃO */}
      <Text style={styles.description}>
        Insira seu e-mail cadastrado para{"\n"}
        receber o token de segurança
      </Text>

      {/* CAMPO */}
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#8A8A8A"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.button}
        onPress={enviarToken}
      >
        <Image
          source={require("../../../../assets/iconentrar.png")}
          style={styles.icon}
        />

        <Text style={styles.buttonText}>
          Enviar token
        </Text>
      </TouchableOpacity>

      {/* RODAPÉ */}
      <Text style={styles.footer}>
        Se você não receber o e-mail,{"\n"}
        verifique na sua caixa de spam
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
  },

  back: {
    position: "absolute",
    top: 48,
    left: 30,
    zIndex: 10,
  },

  backText: {
    fontSize: 32,
    color: "#1A237E",
    fontWeight: "400",
  },

  title: {
    marginTop: 110,
    fontSize: 32,
    fontWeight: "700",
    color: "#1A237E",
    textAlign: "center",
  },

  description: {
    marginTop: 18,
    textAlign: "center",
    color: "#222222",
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  form: {
    marginTop: 50,
  },

  label: {
    color: "#1A237E",
    marginBottom: 8,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: "#1A237E",
    borderRadius: 25,
    paddingHorizontal: 18,
    backgroundColor: "#F2F2F2",
    fontSize: 16,
    color: "#222222",
  },

  button: {
    marginTop: 50,
    height: 52,
    backgroundColor: "#1F9700",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
    tintColor: "#FFFFFF",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    textAlign: "center",
    color: "#222222",
    fontSize: 13,
    lineHeight: 18,
  },
});