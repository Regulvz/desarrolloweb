import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Pressable, SafeAreaView } from 'react-native';
import Formulario from './components/Formulario';

export default function (){
 /* EJEMPLO DE USESTATE 
 const [clientes, setClientes] = useState([1,2,3,4,5,6,7,8,9,10])
  const newDateHandler = () => {
    const copiaClients = clientes.map(client => client)
      console.log(copiaClients)
      copiaClients.push(11)
      setClientes(copiaClients)
      console.log(clientes)
  }*/
  
  const [modalVisible, setModalVisible] = useState(false)
  
  const newDateHandler= ()=>{
    setModalVisible(false)
  }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> administrador de citas {''}
             <Text style={styles.titlebold}>veterinaria</Text>
            </Text>
            <Pressable 
            style={styles.buttonStyle}
            onPress={() => {
              setModalVisible(true);
            }}
            >
                <Text style={styles.buttonstyleText}>Nueva cita</Text>
            </Pressable>
            <Formulario 
            modalVisible={modalVisible}
            newDateHandler={newDateHandler}>
            </Formulario>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    justifyContent:'center'
  },
  titlebold:{
    justifyContent: 'center',
    fontWeight:'bold',
    color:'#7209b7'
  },
  buttonStyle: {
        padding: 10,
        width: 102,
        backgroundColor: 'green',
        borderRadius:10,
        marginHorizontal: 400,
    },
    buttonstyleText: {
      color: 'black',
      textAling: 'center',
      fontWeight:'bold',
      textTransform: 'uppercase',
    },
});
