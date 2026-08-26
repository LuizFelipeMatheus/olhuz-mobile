import { useState } from "react";
import { Alert } from "react-native";

export const useEditarPerfil = () => {
  const [nome, setNome] = useState("Nome Sobrenome");

  const [email, setEmail] = useState(
    "email@email.com"
  );

  const [telefone, setTelefone] = useState(
    "(11) 99999-9999"
  );

  const [cpf] = useState(
    "000.000.000-00"
  );

  const [dataNascimento] = useState(
    "00/00/0000"
  );

  const salvar = async () => {
    try {
      console.log({
        nome,
        email,
        telefone,
      });

      Alert.alert(
        "Sucesso",
        "Dados atualizados com sucesso!"
      );

    
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível atualizar os dados."
      );
    }
  };

  const voltar = () => {
    console.log("Voltar");
  };

  return {
    nome,
    setNome,
    email,
    setEmail,
    telefone,
    setTelefone,
    cpf,
    dataNascimento,
    salvar,
    voltar,
  };
};