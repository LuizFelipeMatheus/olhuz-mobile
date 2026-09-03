import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
 
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
 
export const HomeViewModel = (navigation: NavigationProps) => {
 
  const entrar = () => {
    Alert.alert("Entrar", "Ir para tela de Login");
  };
 
  const criarConta = () => {
    navigation.navigate("Register");
  };
 
  // JSON DA HOME
  const homeJson = {
    titulo: "Bem-vindo ao Olhuz",
    subtitulo:
      "Sua plataforma inteligente para gerenciar imagens com segurança e praticidade.",
    botoes: {
      entrar: {
        texto: "Entrar",
        rota: "Login",
      },
      criarConta: {
        texto: "Criar conta",
        rota: "RegisterScreen",
      },
    },
    termos: {
      texto: "Ao continuar, você concorda com nossos",
      link: "Termos de Uso e Política de Privacidade",
    },
  };
 
  return {
    entrar,
    criarConta,
    homeJson,
  };
};