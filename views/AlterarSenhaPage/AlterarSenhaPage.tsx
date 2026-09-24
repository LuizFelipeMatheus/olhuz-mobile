import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Eye, EyeOff } from "lucide-react-native";
import { RootStackParamList } from "../../App";
import { AlterarSenhaScreenViewModel } from "./ViewModelAlterarSenha";

type RouteProps = RouteProp<
  RootStackParamList,
  "AlterarSenhaScreen"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "AlterarSenhaScreen"
>;

export function AlterarSenhaScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const { email } = route.params;

  const {
    senha,
    setSenha,
    alterarSenha,
  } = AlterarSenhaScreenViewModel(navigation);

  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  const temMinimo = senha.length >= 8;
  const temMinuscula = /[a-z]/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);

  const requisitos = [
    temMinimo,
    temMinuscula,
    temMaiuscula,
    temNumero,
  ];

  const forca = requisitos.filter(Boolean).length;

  return (
    <View style={styles.container}>

      {/* VOLTAR */}
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* TÍTULO */}
      <Text style={styles.titulo}>
        Redefinir Senha
      </Text>

      {/* DESCRIÇÃO */}
      <Text style={styles.descricao}>
        Crie uma nova senha para acessar{"\n"}
        sua conta:
      </Text>

      {/* NOVA SENHA */}
      <Text style={styles.label}>
        Nova Senha
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="***********"
          placeholderTextColor="#777777"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={styles.eye}
          onPress={() =>
            setMostrarSenha(!mostrarSenha)
          }
        >
          {mostrarSenha ? (
            <EyeOff
              size={19}
              color="#111111"
            />
          ) : (
            <Eye
              size={19}
              color="#111111"
            />
          )}
        </TouchableOpacity>
      </View>

      {/* FORÇA DA SENHA */}
      <View style={styles.forcaContainer}>
        {requisitos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.barra,
              index < forca
                ? styles.barraAtiva
                : styles.barraInativa,
            ]}
          />
        ))}
      </View>

      <Text style={styles.forcaTexto}>
        {forca >= 4 ? "Senha forte" : "Senha fraca"}
      </Text>

      {/* CONFIRMAR SENHA */}
      <Text style={styles.labelConfirmar}>
        Confirmar Nova Senha
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="***********"
          placeholderTextColor="#777777"
          secureTextEntry={!mostrarConfirmacao}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity
          style={styles.eye}
          onPress={() =>
            setMostrarConfirmacao(
              !mostrarConfirmacao
            )
          }
        >
          {mostrarConfirmacao ? (
            <EyeOff
              size={19}
              color="#111111"
            />
          ) : (
            <Eye
              size={19}
              color="#111111"
            />
          )}
        </TouchableOpacity>
      </View>

      {/* REQUISITOS */}
      <View style={styles.requisitos}>

        <Text
          style={[
            styles.requisito,
            temMinimo && styles.requisitoAtivo,
          ]}
        >
          ✓ Mínimo de 8 caracteres
        </Text>

        <Text
          style={[
            styles.requisito,
            temMinuscula && styles.requisitoAtivo,
          ]}
        >
          ✓ Letra minúscula
        </Text>

        <Text
          style={[
            styles.requisito,
            temMaiuscula && styles.requisitoAtivo,
          ]}
        >
          ✓ Letra maiúscula
        </Text>

        <Text
          style={[
            styles.requisito,
            temNumero && styles.requisitoAtivo,
          ]}
        >
          ✓ Número
        </Text>

      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => alterarSenha(email)}
      >
        <Text style={styles.textoBotao}>
          Redefinir senha
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 50,
  },

  back: {
    position: "absolute",
    top: 48,
    left: 68,
    zIndex: 10,
  },

  backText: {
    fontSize: 30,
    color: "#1A237E", // Ajustado para a cor primária (#1A237E)
    fontWeight: "400",
  },

  titulo: {
    marginTop: 113,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#1A237E", // Ajustado para a cor primária (#1A237E)
  },

  descricao: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: "#222222",
  },

  label: {
    marginTop: 42,
    marginLeft: 10,
    marginBottom: 7,
    fontSize: 13,
    color: "#1A237E", // Ajustado para a cor primária (#1A237E)
  },

  inputContainer: {
    height: 32,
    borderWidth: 1.3,
    borderColor: "#1A237E", // Ajustado para a cor primária (#1A237E)
    borderRadius: 18,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#222222",
  },

  eye: {
    width: 38,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  forcaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  barra: {
    height: 8,
    width: "23%",
    borderRadius: 5,
  },

  barraAtiva: {
    backgroundColor: "#1E9B00",
  },

  barraInativa: {
    backgroundColor: "#CCCCCC",
  },

  forcaTexto: {
    marginTop: 2,
    fontSize: 11,
    color: "#555555",
  },

  labelConfirmar: {
    marginTop: 18,
    marginLeft: 10,
    marginBottom: 7,
    fontSize: 13,
    color: "#1A237E", // Ajustado para a cor primária (#1A237E)
  },

  requisitos: {
    marginTop: 29,
  },

  requisito: {
    fontSize: 14,
    lineHeight: 19,
    color: "#111111",
  },

  requisitoAtivo: {
    color: "#1E9B00", // Destaque verde para requisitos preenchidos
  },

  botao: {
    height: 47,
    backgroundColor: "#1E9B00", // Atualizado para o verde da primeira tela (#1E9B00)
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
    marginHorizontal: 10,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});