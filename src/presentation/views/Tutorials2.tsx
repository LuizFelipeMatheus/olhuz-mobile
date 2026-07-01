import React, { useState } from "react";
import { COLORS } from './../theme/AppTheme';
import {
    View, Text, Image, StyleSheet, ToastAndroid, Platform, TouchableOpacity,
} from "react-native";

import styles from "./../theme/Tutorials2Styles";

export const Tutorials2 = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Respostas do Olhuz</Text>
            <View style={styles.card}>
                <Image style={styles.img} source={require("../../../assets/img/Group 90 (1).png")} />
                <Text style={styles.leg}>Voz: lê o que está na tela
                    Som: alerta e ações</Text>
            </View>

            <View style={styles.container}>
                <Image style={styles.img} source={require("../../../assets/img/vector.png")} />
                <Text style={styles.leg}>Vibração: confirma escolhas</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnUp}><Text style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: 24, color: '#000000' }}>Pular</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnRepeat}><Text style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: 24, color: '#FFFFFF' }}>Repetir</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnAdvance}><Text style={{ fontFamily: 'Open Sans', fontWeight: 'bold', fontSize: 24, color: '#FFFFFF' }}>Avançar</Text></TouchableOpacity>
            </View>

        </View>
    );
};


export default Tutorials2;