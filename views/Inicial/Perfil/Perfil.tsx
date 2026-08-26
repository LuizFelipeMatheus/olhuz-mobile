import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { User, CalendarDays, Mail, Phone, FileUser } from 'lucide-react-native';
import { PencilLine } from "lucide-react-native";
export const PerfilScreen = () => {

     
    const dadosUsuario = [
        {
            id: '1',
            label: 'Nome Completo',
            valor: 'Nome Sobrenome',
            icon: () => <User size={22} color="#1D3D87" />
        },
        {
            id: '2',
            label: 'Data de Nascimento',
            valor: '00/00/0000',    
            icon: () => <CalendarDays size={22} color="#1D3D87" />
        },
        {
            id: '3',
            label: 'Email',
            valor: 'email@exemplo.com',
            icon: () => <Mail size={22} color="#1D3D87" />
        },
        {
            id: '4', 
            label: 'Telefone',
            valor: '(11) 99999-9999',
            icon: () => <Phone size={22} color="#1D3D87" />
        },
        {
            id: '5',
            label: 'CPF',
            valor: '000.000.000-00',
            icon: () => <FileUser size={22} color="#1D3D87" />
        }
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.mainTitle}>Informações Pessoais</Text>

            {dadosUsuario.map((item) => (
                <View key={item.id} style={styles.infoCard}>
                    {/* Container do Ícone */}
                    <View style={styles.iconContainer}>
                        {item.icon()}
                    </View>

                    {/* Container dos Textos */}
                    <View style={styles.textContainer}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Text style={styles.valor}>{item.valor}</Text>
                    </View>
                </View>
            ))}

          
            <TouchableOpacity style={styles.editButton} 
            onPress={() => console.log('Editar dados')} >
                <PencilLine size={20}  color="#fff" style={{ marginRight: 10, marginLeft: -115, top: 1 }} />
                <Text style={styles.editButtonText}>Editar dados</Text>
                
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        top: 170,
    },
    content: {
        padding: 20,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D3D87', 
        marginBottom: 20,
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0', 
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#EEF3FF', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 13,
        color: '#718096',
        marginBottom: 2,
    },
    valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1D3D87',
    },
    // Estilos do Botão
    editButton: {
        backgroundColor: '#1D3D87',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
        marginTop: -20,
    },
});