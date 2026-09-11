import { useState, useMemo } from "react";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function RegisterViewModel(navigation: NavigationProps) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [carregando, setCarregando] = useState(false);

  // Calcula dinamicamente a força da senha de 0 a 5
  const forcaSenha = useMemo(() => {
    if (!senha) return 0;
    let pontos = 0;
    // Critério 1: Comprimento mínimo
    if (senha.length >= 8) pontos += 1;

    // Critério 2: Letras minúsculas
    if (/[a-z]/.test(senha)) pontos += 1;

    // Critério 3: Letras maiúsculas
    if (/[A-Z]/.test(senha)) pontos += 1;

    // Critério 4: Números
    if (/[0-9]/.test(senha)) pontos += 1;

    // Critério 5: Caracteres especiais
    if (/[^A-Za-z0-9]/.test(senha)) pontos += 1;

    return pontos;
  }, [senha]);

  const cadastrar = async () => {
    // 1. Validação de campos obrigatórios
    if (!nome.trim() || !dataNascimento.trim() || !cpf.trim() || !email.trim() || !senha.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // 2. Validação de confirmação de senha
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    // 3. Validação dos termos
    if (!aceitou) {
      Alert.alert("Erro", "Você precisa aceitar os Termos de Uso para continuar.");
      return;
    }

    try {
      setCarregando(true);

      // Exemplo de payload pronto para envio para API:
      const payload = {
        nome,
        dataNascimento,
        cpf,
        email,
        senha,
      };

      // TODO: Substituir por chamada real da API
      // await api.post('/registro', payload);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      Alert.alert("Sucesso", "Conta criada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("ValidarTokenScreen", { email }),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    } finally {
      setCarregando(false);
    }
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
    forcaSenha,
    carregando,
    cadastrar,
  };
}