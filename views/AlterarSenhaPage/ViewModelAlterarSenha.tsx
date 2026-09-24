import { useState } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { LoginScreen } from "../LoginPage/Login";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function AlterarSenhaScreenViewModel(navigation: NavigationProp) {
  // Estado para controlar a nova senha digitada no TextInput
  const [senha, setSenha] = useState("");

  // Função responsável por validar a senha e executar a alteração
  function alterarSenha(email: string) {
    if (!senha.trim()) {
      Alert.alert("Erro", "Digite uma senha válida para alterar.");
      return;
    }

    // Aqui você pode adicionar a chamada de API/serviço para atualizar a senha

    Alert.alert("Sucesso", "Senha alterada com sucesso!", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  }

  // Retorna os estados e funções para serem consumidos na View
  return {
    senha,
    setSenha,
    alterarSenha,
  };
}