import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Home ({navigation}) {

    const navegarSair = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container1} >
            <Text style={styles.text1} >Meus grupos</Text>
            <TouchableHighlight style={styles.button1} >
                <Text style={styles.textButton1} >Novo</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button1}>
                <Text style={styles.textButton1}>Buscar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button2} onPress={navegarSair} >
                <Text style={styles.textButton1}>Sair</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text1: {
        marginTop: 40,
        fontSize: 28,
        fontFamily: 'Verdana',
        marginBottom: 60
    },
    button1: {
        backgroundColor: '#449',
        height: 30,
        width: 150,
        borderRadius: 4,
        marginBottom: 30
    },
    textButton1: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    button2: {
        backgroundColor: '#944',
        height: 30,
        width: 150,
        borderRadius: 4
    },
})