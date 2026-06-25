import { useState } from "react";
import { Alert } from "react-native";

export const RegisterViewModel = () => {

  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitou, setAceitou] = useState(false);

  const cadastrar = () => {

    if (!aceitou) {
      Alert.alert(
        "Atenção",
        "Você precisa aceitar os termos."
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Conta criada com sucesso!"
    );
  };

  return {
    nome,
    setNome,
    dataNascimento,
    setDataNascimento,
    cpf,
    setCpf,
    email,
    setEmail,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    aceitou,
    setAceitou,
    cadastrar,
  };
};