import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export default function Login () {

    const entrar = () => {
        console.log("Entrando");
    }

    return (
        <View style={styles.container1}>
            <Text style={styles.text1} >App de CRUD</Text>
            <Text style={styles.text2} >Login</Text>
            <TextInput style={styles.input1} />
            <TextInput style={styles.input1} />
            <TouchableHighlight style={styles.button1} onPress={entrar} >
                <Text style={styles.textButton1}>Entrar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    text1: {
        
        fontSize: 20,
        fontFamily: 'Verdana'
    }, 
    text2: {
        marginTop: 200,
        fontSize: 20,
        fontFamily: 'Verdana'
    }, 
    input1: {
        marginTop: 20,
        height: 34,
        width: 250,
        fontSize: 14,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'silver',
        borderRadius: 4
    }, 
    button1: {
        marginTop: 30,
        backgroundColor: '#494',
        height: 30,
        width: 150,
        borderRadius: 4
        
    },
    textButton1: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    }
})