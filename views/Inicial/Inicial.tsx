import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

export const InicialScreen = () => {
    const [leituraAtiva, setLeituraAtiva] = useState(true);
    const [velocidade, setVelocidade] = useState('1.0x');
    const [tipoVoz, setTipoVoz] = useState('Masculina');
    const [vibracao, setVibracao] = useState(true);
    const [sonsAlertas, setSonsAlertas] = useState(true);
    const [tipodetema, setTipodetema] = useState('Modo claro');
    
  
    const [volume, setVolume] = useState(0.75); 

    const velocidades = ['0.5x', '1.0x', '1.5x', '2.0x'];

  
    const aumentarVolume = () => setVolume(prev => Math.min(prev + 0.1, 1));
    const diminuirVolume = () => setVolume(prev => Math.max(prev - 0.1, 0));

    return (
        <View style={styles.container}>
            
            {/* Cabeçalho Azul */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerTitle}>Configurações</Text>
                    <Text style={styles.headerSubtitle}>Gerencie suas preferências de personalização do app</Text>
                </View>
                <View style={styles.iconPlaceholder} />
            </View>

            {/* Conteúdo das Configurações */}
            <View style={styles.contentContainer}>
                
                {/* Leitura de Tela */}
                <View style={styles.rowSetting}>
                    <Text style={styles.sectionTitle}>Leitura de tela</Text>
                    <Switch
                        value={leituraAtiva}
                        onValueChange={(value) => setLeituraAtiva(value)}
                        trackColor={{ false: '#767577', true: '#1D3D87' }}
                        thumbColor={leituraAtiva ? '#fff' : '#f4f3f4'}
                    />
                </View>

                {/* Velocidade da Fala */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Velocidade da fala</Text>
                    <View style={styles.botoesContainer}>
                        {velocidades.map((vel) => {
                            const isActive = velocidade === vel;
                            return (
                                <TouchableOpacity 
                                    key={vel} 
                                    style={[styles.buttonBadge, isActive && styles.buttonActive]} 
                                    onPress={() => setVelocidade(vel)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {vel}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Tipo de Voz */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Tipo de Voz</Text>
                    <View style={styles.botoesContainer}>
                        {['Feminina', 'Masculina'].map((voz) => {
                            const isActive = tipoVoz === voz;
                            return (
                                <TouchableOpacity 
                                    key={voz} 
                                    style={[styles.buttonPill, isActive && styles.buttonActive]} 
                                    onPress={() => setTipoVoz(voz)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {voz}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Volume do som */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Volume do som</Text>
                 
                    <View style={styles.sliderContainer}>
                        <TouchableOpacity onPress={diminuirVolume}>
                            <Text style={styles.sliderControl}>−</Text>
                        </TouchableOpacity>

                        <Slider
                            style={styles.sliderComponent}
                            minimumValue={0}
                            maximumValue={1}
                            value={volume}
                            onValueChange={(value) => setVolume(value)}
                            minimumTrackTintColor="#1D3D87"  
                            maximumTrackTintColor="#E5E5E5"  
                            thumbTintColor="#1D3D87"        
                        />

                        <TouchableOpacity onPress={aumentarVolume}>
                            <Text style={styles.sliderControl}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Aparência */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.mainTitle}>Aparência</Text>
                    <View style={styles.botoesContainer}>
                        <TouchableOpacity />
                    </View>
                </View>

                {/* Modo escuro */}
                <View style={styles.sectionBlock}>
                    <Text style={styles.sectionTitle}>Modo escuro</Text>
                    <View style={styles.botoesContainer}>
                        {['Modo escuro', 'Modo claro'].map((modo) => {
                            const isActive = tipodetema === modo;
                            return (
                                <TouchableOpacity 
                                    key={modo} 
                                    style={[styles.buttonPill, isActive && styles.buttonActive]} 
                                    onPress={() => setTipodetema(modo)}
                                >
                                    <Text style={[styles.buttonText, isActive && styles.buttonTextActive]}>
                                        {modo}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <Text style={styles.mainTitlee}>Notificações e Sensores</Text>

                    {/* Vibração */}
                    <View style={styles.RowSetting}>
                        <Text style={styles.sectionTitleNoMargin}>Vibração</Text>
                        <Switch
                            value={vibracao}
                            onValueChange={(value) => setVibracao(value)}
                            trackColor={{ false: '#E5E5E5', true: '#1D3D87' }}
                            thumbColor={'#fff'}
                        />
                    </View>

                    {/* Sons de Alerta */}
                    <View style={styles.RowSetting}>
                        <Text style={styles.sectionTitleNoMargin}>Sons de Alerta</Text>

                    <Switch
                        value={sonsAlertas}
                        onValueChange={(value) => setSonsAlertas(value)}
                        trackColor={{ false: '#E5E5E5', true: '#1D3D87' }}
                        thumbColor={'#fff'}
                        />
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#1D3D87',
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerSubtitle: {
        color: '#ddd',
        fontSize: 12,
        marginTop: 5,
    },
    iconPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        opacity: 0.9,
    },
    contentContainer: {
        padding: 20,
    },
    rowSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    sectionBlock: {
        marginVertical: 12,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        marginBottom: 10,
    },
    botoesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        gap: 10,
    },
    buttonBadge: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 20,
    },
    buttonPill: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
        flex: 1, 
        alignItems: 'center',
    },
    buttonActive: {
        backgroundColor: '#1D3D87',
    },
    buttonText: {
        color: '#333',
        fontWeight: '500',
        fontSize: 15,
    },
    buttonTextActive: {
        color: '#fff',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 5,
    },
    sliderControl: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#666',
        paddingHorizontal: 5,
    },
    
    sliderComponent: {
        flex: 1,
        height: 40,
    },
    mainTitlee: {
        fontWeight: 'bold',
        color: '#000',
        marginTop: 25,
        marginBottom: 5,
        fontSize: 20,
    },                  
    RowSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12, 
    },
    sectionTitleNoMargin: {
        fontSize: 16,
        color: '#333', 
        fontWeight: '500',
    },
});