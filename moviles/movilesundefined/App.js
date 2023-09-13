import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [numero_uno, setNumeroUno] = useState()
  const [numero_dos, setNumeroDos] = useState()
  const [total, setTotal] = useState()

  const sumar = () => {
    setTotal = (parseFloat(numero_uno) +  parseFloat(numero_dos))
    setNumeroUno("")
    setNumeroDos("")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput 
      keyboardType='number-pad'
      style={styles.inputText} 
      placeholder='Introduce un numero' 
      onChangeText={setNumeroUno}
      value={setNumeroUno}></TextInput>
      <TextInput 
      keyboardType='number-pad'
      style={styles.inputText} 
      placeholder='Introduce el segundo numero'
       onChange={setNumeroDos}
       value={numero_dos}>
      </TextInput>
      <Button title='sumar'onPress={sumar} ></Button>
      <Text style={styles.result}>{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    paddingBottom: 40,
    fontSize: 50,
    backgroundColor: 'green'

  },
  
});
