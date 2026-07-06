import React from "react";
import { COLORS } from '../../theme/AppTheme';
import {
    View, Text, Image
} from "react-native";

import styles from "../../theme/TutorialsStyles";

import { ButtonTutorials } from "../../../../components/ButtonTutorials";

export const Tutorials2 = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Respostas do Olhuz</Text>
            <View style={styles.card}>
                <Image style={styles.img} source={require("../../../../assets/img/Group 90 (1).png")} />
                <Text style={styles.leg}>Voz: lê o que está na tela
                    Som: alerta e ações</Text>
            </View>

            <View style={styles.container}>
                <Image style={styles.img} source={require("../../../../assets/img/vector.png")} />
                <Text style={styles.leg}>Vibração: confirma escolhas</Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btnContainer}>
                    <View style={styles.twobtn}><ButtonTutorials title="Pular" textColor="#000000" bgColor="#E0E0E0" />
                        <ButtonTutorials title="Repetir" textColor="#FFFFFF" bgColor="#DD4A00" />
                    </View>
                    <ButtonTutorials title="Avançar" textColor="#FFFFFF" bgColor="#00008B" />
                </View>
            </View>

        </View>
    );
};


export default Tutorials2;