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
import { User } from 'lucide-react-native';
import { RootStackParamList } from "../../../../App";
import { TokenViewModel } from "./ViewModelToken";

export function TokenScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { email, setEmail, enviarToken } = TokenViewModel(navigation);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Receber Token</Text>

      <Text style={styles.description}>
        Insira seu e-mail cadastrado para receber o token de segurança
      </Text>

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

      <TouchableOpacity
        style={styles.button}
        onPress={enviarToken}
      >
        {/* NAO ESQUECER DE COLOCAR IMAGEM NO BOTAO DE ENVIAR <Image
          source={require("../../assets/iconentrar.png")}
          style={styles.icon}
        /> */}

        <Text style={styles.buttonText}>
          Enviar token
        </Text>
      </TouchableOpacity>

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
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
  },

  back: {
    marginTop: 50,
  },

  backText: {
    fontSize: 32,
    color: "#101B73",
  },

  title: {
    marginTop: 35,
    fontSize: 36,
    fontWeight: "700",
    color: "#101B73",
    textAlign: "center",
  },

  description: {
    marginTop: 18,
    textAlign: "center",
    color: "#222",
    fontSize: 18,
    lineHeight: 26,
    paddingHorizontal: 10,
  },

  form: {
    marginTop: 70,
  },

  label: {
    color: "#101B73",
    marginBottom: 8,
    marginLeft: 10,
    fontSize: 16,
  },

  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: "#101B73",
    borderRadius: 25,
    paddingHorizontal: 18,
    backgroundColor: "#F2F2F2",
    fontSize: 16,
  },

  button: {
    marginTop: 70,
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
    tintColor: "#FFF",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },

  footer: {
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    textAlign: "center",
    color: "#222",
    fontSize: 15,
    lineHeight: 22,
  },
});