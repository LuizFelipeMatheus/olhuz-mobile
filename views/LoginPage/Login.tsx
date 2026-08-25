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
import ViewModelLogin from "./ViewModelLogin";
import { LogIn } from "lucide-react-native";

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    email,
    senha,
    mostrarSenha,
    onChange,
    toggleMostrarSenha,
  } = ViewModelLogin();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Acessar Conta</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => onChange("email", text)}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={(text) => onChange("senha", text)}
        />

        <TouchableOpacity onPress={toggleMostrarSenha}>
          <Text style={styles.link}>
            {mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Ouvir senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("TokenScreen")}
        >
          <Text style={styles.esqueci}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}>
           <LogIn
                    size={24}
                    color="#FFFFFF"
                    strokeWidth={2.9}
          
                  />
       
        <Text style={styles.txtBtn}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
    fontSize: 30,
    color: "#1A237E",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1A237E",
    textAlign: "center",
    marginTop: 15,
  },

  form: {
    marginTop: 90,
  },

  label: {
    color: "#1A237E",
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 5,
  },

  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: "#1A237E",
    borderRadius: 30,
    paddingHorizontal: 18,
    backgroundColor: "#EFEFEF",
    marginBottom: 18,
    fontSize: 16,
  },

  esqueci: {
    textAlign: "center",
    color: "#4E7BFF",
    fontSize: 19,
    marginTop: 130,
  },

  link: {
    textAlign: "right",
    color: "#4E7BFF",
    fontSize: 17,
    marginTop: 15,
  },

  btnEntrar: {
    marginTop: -100,
    height: 55,
    backgroundColor: "#1E9B00",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
   alignContent: "center",
  },

  txtBtn: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 22,
    alignContent: "center",
    marginLeft: 10,
  },
});