// Contém as rotas públicas do app
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../features/auth/views/WelcomeScreen';
import { RegisterScreen } from '../features/auth/views/RegisterScreen';
import { LoginScreen } from '../features/auth/views/LoginScreen';
import { ForgotPasswordScreen } from '../features/auth/views/ForgotPasswordScreen';
import { VerifyTokenScreen } from '../features/auth/views/VerifyTokenScreen';
import { ResetPasswordScreen } from '../features/auth/views/ResetPassword';



// ================================================
// TIPAGEM DA PILHA PÚBLICA
// ================================================
export type AuthStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: { email?: string; };
    VerifyToken: { email: string; };
    ResetPassword: { token: string; email: string; };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName="Welcome"
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="VerifyToken" component={VerifyTokenScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
};