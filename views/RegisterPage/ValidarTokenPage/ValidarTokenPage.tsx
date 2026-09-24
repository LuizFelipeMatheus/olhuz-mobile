import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { ValidarTokenViewModel } from "./ViewModelValidarToken";

type RouteProps = RouteProp<
  RootStackParamList,
  "ValidarTokenScreen"
>;

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList
>;

export function ValidarTokenScreen() {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();

  const { email } = route.params;

  const vm = ValidarTokenViewModel(navigation);

  const [codigo, setCodigo] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputs = useRef<(TextInput | null)[]>([]);

  const alterarCodigo = (valor: string, index: number) => {
    const novoCodigo = [...codigo];
    novoCodigo[index] = valor;
    setCodigo(novoCodigo);

    vm.setToken(novoCodigo.join(""));

    if (valor && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const apagarCodigo = (
    valor: string,
    index: number
  ) => {
    if (
      valor === "" &&
      index > 0 &&
      codigo[index] === ""
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

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
        {vm.validarTokenJson?.titulo ?? "Verifique seu e-mail"}
      </Text>

      {/* DESCRIÇÃO */}
      <Text style={styles.description}>
        Enviamos um código para
      </Text>

      <Text style={styles.email}>
        {email}
      </Text>

      {/* CÓDIGO */}
      <Text style={styles.label}>
        Código de verificação
      </Text>

      <View style={styles.codigoContainer}>
        {codigo.map((valor, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              inputs.current[index] = ref;
            }}
            style={styles.codigoInput}
            value={valor}
            placeholder={
              vm.validarTokenJson?.campo?.token?.placeholder ? "" : undefined
            }
            onChangeText={(text) => {
              alterarCodigo(
                text.replace(/[^0-9]/g, "").slice(-1),
                index
              );
            }}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                apagarCodigo("", index);
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => vm.validarToken(email)}
      >
        <Text style={styles.textoBotao}>
          {vm.validarTokenJson?.botao?.texto ?? "Verificar"}
        </Text>
      </TouchableOpacity>

      {/* REENVIO */}
      <View style={styles.reenvio}>
        <Text style={styles.reenvioTexto}>
          Código não recebido?
        </Text>

        <TouchableOpacity onPress={() => console.log("Reenviar código")}>
          <Text style={styles.reenviarLink}>
            Reenviar código (45s)
          </Text>
        </TouchableOpacity>
      </View>

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
    color: "#1A237E",
    fontWeight: "400",
  },

  titulo: {
    marginTop: 113,
    fontSize: 24,
    fontWeight: "700",
    color: "#1A237E",
    textAlign: "left",
  },

  description: {
    marginTop: 17,
    fontSize: 14,
    color: "#222222",
  },

  email: {
    marginTop: 2,
    fontSize: 14,
    color: "#1A237E",
    fontWeight: "600",
  },

  label: {
    marginTop: 62,
    marginLeft: 10,
    marginBottom: 12,
    fontSize: 13,
    color: "#1A237E",
  },

  codigoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  codigoInput: {
    width: 38,
    height: 42,
    borderWidth: 1.3,
    borderColor: "#1A237E",
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    fontSize: 18,
    fontWeight: "bold",
    color: "#111111",
  },

  botao: {
    marginTop: 90,
    height: 46,
    backgroundColor: "#1E9B00",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  reenvio: {
    marginTop: 31,
    alignItems: "center",
  },

  reenvioTexto: {
    color: "#222222",
    fontSize: 14,
    lineHeight: 20,
  },

  reenviarLink: {
    color: "#1A237E",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
});