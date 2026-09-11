import { useState } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function ValidarTokenViewModel(navigation: NavigationProps) {
  const [token, setToken] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Textos e configurações da tela
  const validarTokenJson = {
    titulo: "Validação de Token",
    campo: {
      token: {
        placeholder: "Digite o código recebido",
      },
    },
    botao: {
      texto: "Validar Token",
    },
  };

  const validarToken = async (email: string) => {
    // Validação básica de campo vazio
    if (!token.trim()) {
      Alert.alert("Erro", "Por favor, informe o token de validação.");
      return;
    }

    try {
      setCarregando(true);

      // TODO: Substitua pelo seu serviço de API real
      // Exemplo:
      // const response = await api.post('/validar-token', { email, token });

      // Simulação de requisição
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Alert.alert("Sucesso", "Token validado com sucesso!");

      // Exemplo de navegação para a próxima tela (ajuste o nome conforme seu RootStackParamList)
      // navigation.navigate("NovaSenhaScreen", { email, token });

    } catch (error) {
      Alert.alert("Erro", "Token inválido ou expirado. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  return {
    token,
    setToken,
    carregando,
    validarTokenJson,
    validarToken,
  };
}