import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Formulario from './components/Formulario';


function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes]=useState([])
  console.log(pacientes)
  const arraypacientes= pacientes.map((pacientes) => pacientes)
  const newDateHandler= ()=>{
    setModalVisible(false)
  }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> administrador de citas {''}
             <Text style={styles.titlebold}>veterinaria</Text>
            </Text>
            <Text>DATOS</Text>
            <FlatList
  data={pacientes}
  renderItem={({ item }) => (
    <Text>
    Nombre: {item.paciente}, 
    Email: {item.email}, 
    Telefono:{item.telefono},
    Sintomas: {item.sintomas}
    </Text>
  )}
/>
            <Button title='aceptar' onPress={()=> {setModalVisible(true)}}/>
            <Formulario modalVisible={modalVisible} newDateHandler={newDateHandler} setPacientes={setPacientes} pacientes={pacientes}/>
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
        paddind: 10,
        width: 102,
        backgroundColor: 'green',
        borderRadius:30,
        marginHorizontal: 400,
    },
    buttonstyleText: {
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
});

export default App;
