import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { User, CalendarDays, Mail, Phone, FileUser, PencilLine } from 'lucide-react-native';

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
            {/* Cabeçalho do Topo */}
            <View style={styles.headerCard}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Perfil</Text>
                    <Text style={styles.headerSubTitle}>
                        Gerencie suas informações pessoais de forma segura
                    </Text>
                </View>
                
                {/* Imagem/Ícone do Olho */}
                <View style={styles.logoCircle}>
                    <Image 
                        source={require('../../assets/logo.png')} // Substitua pelo caminho correto da sua imagem
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>
            </View>

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

            <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => console.log('Editar dados')}
            >
                <PencilLine size={20} color="#fff" />
                <Text style={styles.editButtonText}>Editar dados</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        paddingTop: 50, // Garante espaço para a barra de status
    },
    // Estilos do Cabeçalho
    headerCard: {
        backgroundColor: '#EBF3FF',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    headerTextContainer: {
        flex: 1,
        paddingRight: 12,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 6,
    },
    headerSubTitle: {
        fontSize: 14,
        color: '#4B6B94',
        lineHeight: 18,
    },
    logoCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 40,
        height: 40,
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
    // Estilos do Botão Refatorados (sem margens negativas)
    editButton: {
        backgroundColor: '#1D3D87',
        paddingVertical: 14,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});