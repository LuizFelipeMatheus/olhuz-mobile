import { useState } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const ViewModelLogin = (navigation: NavigationProps) => {

  const [values, setValues] = useState({
    email: "",
    senha: "",
    mostrarSenha: false,
  });

  const onChange = (property: string, value: any) => {

    setValues({
      ...values,
      [property]: value,
    });

  };

  const toggleMostrarSenha = () => {

    setValues({
      ...values,
      mostrarSenha: !values.mostrarSenha,
    });

  };

  const entrar = () => {

    const loginUsuarioJson = {
      email: values.email,
      senha: values.senha,
    };

    console.log(
      "JSON DO LOGIN:",
      JSON.stringify(loginUsuarioJson, null, 2)
    );

    if (!values.email || !values.senha) {

      Alert.alert(
        "Atenção",
        "Preencha o e-mail e a senha."
      );

      return;
    }

    Alert.alert(
      "Sucesso",
      "Login realizado com sucesso!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Home"),
        },
      ]
    );

  };

  const loginJson = {

    titulo: "Acessar Conta",

    campos: {

      email: {
        label: "E-mail",
        placeholder: "ceguinho@email.com",
      },

      senha: {
        label: "Senha",
        placeholder: "*******",
      },

    },

    acoes: {

      mostrarSenha: "Mostrar senha",

      ocultarSenha: "Ocultar senha",

      ouvirSenha: "Ouvir senha",

      esqueciSenha: "Esqueci minha senha",

      entrar: "Entrar",

    },

    navegacao: {

      esqueciSenha: "TokenScreen",

    },

  };

  return {

    ...values,

    onChange,

    toggleMostrarSenha,

    entrar,

    loginJson,

  };

};

export default ViewModelLogin;