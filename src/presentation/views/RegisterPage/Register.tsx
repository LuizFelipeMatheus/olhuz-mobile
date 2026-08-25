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

import { User } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { RegisterViewModel } from "./ViewModelRegister";
import { UserPlus } from "lucide-react-native";
import { Use } from "react-native-svg";
export const RegisterScreen = () => {

  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const vm = RegisterViewModel(navigation);

return(
    <ScrollView style={styles.container}>

     <TouchableOpacity onPress={() => navigation.goBack()}>
  <Text style={styles.back}>←</Text>
</TouchableOpacity>

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
        placeholder="senha123..."
        secureTextEntry
        value={vm.senha}
        onChangeText={vm.setSenha}
      />

<View style={styles.passwordStrength}>
  {[1,2,3,4,5].map((item) => (
    <View
      key={item}
      style={[
        styles.strengthBar,
        {
         backgroundColor:
  vm.forcaSenha >= item
    ? vm.forcaSenha <= 2
      ? "#FF0000"
      : vm.forcaSenha === 3
      ? "#FFD700"
      : "#2E8B57"
    : "#D3D3D3",
        },
      ]}
    />
  ))}
</View>

<Text style={styles.strengthText}>
  {vm.forcaSenha <= 1 && "Senha muito fraca"}
  {vm.forcaSenha === 2 && "Senha fraca"}
  {vm.forcaSenha === 3 && "Senha média"}
  {vm.forcaSenha === 4 && "Senha forte"}
  {vm.forcaSenha === 5 && "Senha muito forte"}
</Text>
      <Text style={styles.label}>
        Confirmar senha
      </Text>

      <TextInput
        style={styles.input}
         placeholder="senha123..."
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

        < UserPlus 
        size = {24}
        color = "#FFF"
        strokeWidth = {2.5}

        />

        <Text style={styles.txtBtn}>
          Criar Conta
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
  },
passwordStrength: {
  flexDirection: "row",
  marginTop: 8,
  justifyContent: "space-between",
},

strengthBar: {
  flex: 1,
  height: 6,
  borderRadius: 3,
  marginHorizontal: 2,
},

strengthText: {
  marginTop: 5,
  color: "#555",
  fontSize: 12,
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
    borderBlockColor: "#0B166D",
    textShadowColor: "#0B166D",
    fontSize: 16,
    fontWeight: "500",
    color: "#0B166D",
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1.5,
    alignContent: "center",
    borderColor: "#0B166D",
    backgroundColor: "#e4e4e4ff",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
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
  flexDirection: "row",
},

  txtBtn: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
    alignContent : "center",
  },
});