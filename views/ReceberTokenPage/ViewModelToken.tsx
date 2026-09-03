import { useState } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
 
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
 
export function TokenViewModel(navigation: NavigationProps) {
  const [email, setEmail] = useState("");
 
  const enviarToken = () => {
    if (!email.trim()) {
      Alert.alert(
        "Atenção",
        "Informe o e-mail cadastrado."
      );
      return;
    }
 
    const emailValido = /\S+@\S+\.\S+/;
 
    if (!emailValido.test(email)) {
      Alert.alert(
        "E-mail inválido",
        "Digite um e-mail válido."
      );
      return;
    }
 
    Alert.alert(
      "Token enviado",
      "O token foi enviado para o e-mail informado.",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("ValidarTokenScreen", {
              email,
            }),
        },
      ]
    );
  };
 
  // JSON COM OS DADOS PREENCHIDOS PELO USUÁRIO
  const tokenJson = {
    email,
  };
 
  // JSON DA PÁGINA RECEBER TOKEN
  const receberTokenJson = {
    titulo: "Receber Token",
 
    descricao:
      "Insira seu e-mail cadastrado para receber o token de segurança",
 
    campo: {
      email: {
        label: "E-mail",
        placeholder: "email@email.com",
      },
    },
 
    botao: {
      texto: "Enviar token",
    },
 
    rodape: {
      texto:
        "Se você não receber o e-mail, verifique na sua caixa de spam",
    },
 
    mensagens: {
      emailVazio: {
        titulo: "Atenção",
        mensagem: "Informe o e-mail cadastrado.",
      },
 
      emailInvalido: {
        titulo: "E-mail inválido",
        mensagem: "Digite um e-mail válido.",
      },
 
      tokenEnviado: {
        titulo: "Token enviado",
        mensagem: "O token foi enviado para o e-mail informado.",
      },
    },
  };
 
  return {
    email,
    setEmail,
    enviarToken,
    tokenJson,
    receberTokenJson,
  };
}