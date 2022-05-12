import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1} >Projeto de exemplo</Text>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 150
  },
  text1: {
    fontSize: 28,
    fontFamily: 'Verdana'
  }
});
