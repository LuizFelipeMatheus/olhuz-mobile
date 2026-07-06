import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 19, // Margem lateral exata do Figma
        paddingTop: 50,
        paddingBottom: 49, // Espaçamento exato do botão avançar até o fim da tela
    },
    title: {
        /*fontFamily: 'Open Sans',*/
        fontSize: 26,
        fontWeight: 'bold',
        color: '#00008B', // Azul escuro oficial
        textAlign: 'center',
        marginTop: 16,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
    },
    img: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    leg: {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 15,
        maxWidth: '85%',
        fontSize: 23,
    },
    btnContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 49,
    },
    twobtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;