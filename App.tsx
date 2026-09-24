import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./views/HomePage/Home";
import { RegisterScreen } from "./views/RegisterPage/Register";
import { LoginScreen } from "./views/LoginPage/Login";
import { TokenScreen } from "./views/ReceberTokenPage/TokenPage";
import { AlterarSenhaScreen } from "./views/AlterarSenhaPage/AlterarSenhaPage";
import { ValidarTokenScreen } from "./views/RegisterPage/ValidarTokenPage/ValidarTokenPage";
import { PerfilScreen } from "./views/Inicial/Perfil/Perfil";
import { ConfiguracoesScreen } from "./views/Inicial/Configuracoes";

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  RegisterScreen: undefined;
   Login: undefined;
  TokenScreen: undefined;
  AlterarSenhaScreen: { email: string };
  ValidarTokenScreen: { email: string };
  PerfilScreen: undefined;
  ConfiguracoesScreen: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="TokenScreen"
          component={TokenScreen}
        />

        <Stack.Screen
          name="AlterarSenhaScreen"
          component={AlterarSenhaScreen}
        />

        <Stack.Screen
          name="ValidarTokenScreen"
          component={ValidarTokenScreen}
        /> */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}