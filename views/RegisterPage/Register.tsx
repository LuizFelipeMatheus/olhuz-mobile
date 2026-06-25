import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";

import { RegisterViewModel } from "./ViewModelRegister";

export const RegisterScreen = () => {

  const vm = RegisterViewModel();

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.back}>
        ←
      </Text>

      <Text style={styles.title}>
        Criar Conta
      </Text>

      <Text style={styles.label}>
        Nome completo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={vm.nome}
        onChangeText={vm.setNome}
      />

      <Text style={styles.label}>
        Data de nascimento
      </Text>

      <TextInput
        style={styles.input}
        placeholder="dd/mm/yyyy"
        value={vm.dataNascimento}
        onChangeText={vm.setDataNascimento}
      />

      <Text style={styles.label}>
        CPF
      </Text>

      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        value={vm.cpf}
        onChangeText={vm.setCpf}
      />

      <Text style={styles.label}>
        E-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        value={vm.email}
        onChangeText={vm.setEmail}
      />

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        secureTextEntry
        value={vm.senha}
        onChangeText={vm.setSenha}
      />

      <Text style={styles.label}>
        Confirmar senha
      </Text>

      <TextInput
        style={styles.input}
        secureTextEntry
        value={vm.confirmarSenha}
        onChangeText={vm.setConfirmarSenha}
      />

      <View style={styles.checkArea}>
        <Switch
          value={vm.aceitou}
          onValueChange={vm.setAceitou}
        />

        <Text style={styles.termos}>
          Li/ouvi e aceito os Termos de Uso e Política de Privacidade
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={vm.cadastrar}
      >
        <Text style={styles.txtBtn}>
          Criar Conta
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
  },

  back: {
    fontSize: 30,
    color: "#0B166D",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#0B166D",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    color: "#0B166D",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#0B166D",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
  },

  checkArea: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },

  termos: {
    flex: 1,
    marginLeft: 10,
    color: "#555",
  },

  btn: {
    backgroundColor: "#0B166D",
    marginTop: 40,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  txtBtn: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});