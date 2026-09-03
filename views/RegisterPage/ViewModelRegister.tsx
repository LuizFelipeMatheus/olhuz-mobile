import { useState } from "react";

import { Alert } from "react-native";

import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

export function ValidarTokenViewModel(
  navigation: NativeStackNavigationProp<RootStackParamList>
) {
  const [token, setToken] = useState("");

  const validarToken = (email: string) => {

    // JSON COM OS DADOS PREENCHIDOS PELO USUÁRIO
    const tokenJson = {
      email: email,
      token: token,
    };

    // Mostra o JSON no terminal
    console.log(
      "JSON DO USUÁRIO:",
      JSON.stringify(tokenJson, null, 2)
    );

    // Verifica se o token foi preenchido
    if (!token) {
      Alert.alert(
        validarTokenJson.mensagens.tokenVazio.titulo,
        validarTokenJson.mensagens.tokenVazio.mensagem
      );

      return;
    }

    // Token preenchido
    Alert.alert(
      validarTokenJson.mensagens.tokenValidado.titulo,
      validarTokenJson.mensagens.tokenValidado.mensagem
    );

    // Navega para a tela de Login
    navigation.navigate("Login");
  };

  // JSON DA PÁGINA
  const validarTokenJson = {
    titulo: "Validar senha",

    campo: {
      token: {
        placeholder: "Digite o código de validação",
      },
    },

    botao: {
      texto: "Validar token",
    },

    mensagens: {
      tokenVazio: {
        titulo: "Erro",
        mensagem: "Digite o código de validação",
      },

      tokenValidado: {
        titulo: "Sucesso",
        mensagem: "Token validado!",
      },
    },
  };

  return {
    token,
    setToken,
    validarToken,
    validarTokenJson,
  };
}