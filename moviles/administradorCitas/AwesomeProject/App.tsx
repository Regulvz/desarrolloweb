import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Formulario from './components/Formulario';


function App(): JSX.Element {
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
           <Formulario modalVisible={modalVisible} newDateHandler={newDateHandler}
           />
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
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
});

export default App;
