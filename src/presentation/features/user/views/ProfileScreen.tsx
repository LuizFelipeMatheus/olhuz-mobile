import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { User, CalendarDays, Mail, Phone, FileUser, PencilLine } from 'lucide-react-native';
import { styles } from '../styles/profileStyles';

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

