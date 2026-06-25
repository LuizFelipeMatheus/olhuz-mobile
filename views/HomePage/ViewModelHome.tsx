import { Alert } from "react-native";

export const HomeViewModel = () => {

  const entrar = () => {
    Alert.alert("Entrar", "Ir para tela de Login");
  };

  const criarConta = () => {
    Alert.alert("Criar Conta", "Ir para tela de Cadastro");
  };

  return {
    entrar,
    criarConta,
  };
};