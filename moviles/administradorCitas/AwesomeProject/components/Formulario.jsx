import {Modal, SafeAreaView,Text, StyleSheet, View, TextInput, StatusBar, Alert, ScrollView} from "react-native"
import DatePicker from "react-native-date-picker"
import { useState } from "react"
import CustomButton from "./CustomButton"


const Formulario = ({modalVisible, newDateHandler, setPacientes, pacientes}) => {
    const [paciente, setPaciente]= useState('')
    const [email, setEmail]=useState('')
    const [telefono, setTelefono]= useState('')
    const [date, setDate] = useState(new Date())
    const [sintomas, setSintomas]= useState('')

    const handlerAppointment = () => {
        console.log('hiciste Click')
        if([paciente,email,telefono,sintomas].includes('')){        
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{text: 'Ya entendi'},
            {text: 'aceptar'}],
        )
        return
        }

        const nuevoPaciente ={
            paciente,
            email,
            telefono,
            date,
            sintomas
        }
        
        setPacientes([...pacientes,nuevoPaciente])
        clearFields()
        newDateHandler()
    }

    const clearFields = () => {
        setPaciente('')
        setEmail('')
        setTelefono('')
        setDate(new Date())
        setSintomas('')
    }


    return(
          (
          
            <Modal animationType="slide" visible= {modalVisible}>

            <StatusBar backgroundColor={'#333'}></StatusBar>
                <SafeAreaView style={estilos.container}>
                    <ScrollView>
                    <Text style={estilos.title}>
                        Nueva {''}
                    <Text style={estilos.titleBold}>cita</Text>
                    </Text>

                    <View style={estilos.group}>
                        <Text style={estilos.label}>Nombre del paciente</Text>
                        <TextInput  value={paciente} onChangeText={setPaciente} style= {estilos.input} placeholder = "Nombre del paciente" placeholderTextColor={'#666'}></TextInput>
                    </View>

                    <View style={estilos.group}>
                        <Text style={estilos.label}>Email del Paciente</Text>
                        <TextInput value={email} onChangeText={setEmail} style= {estilos.input} placeholder = "email" placeholderTextColor={'#666'}></TextInput>
                    </View>

                    <View style={estilos.group}>
                        <Text style={estilos.label}>Numero de telefono del paciente</Text>
                        <TextInput value={telefono} onChangeText={setTelefono} style= {estilos.input} placeholder = "Numero de telefono del paciente" placeholderTextColor={'#666'}></TextInput>
                    </View>

                    <View style={estilos.group}>
                        <Text style={estilos.label}></Text>
                        <DatePicker date={date}></DatePicker>
                    </View>

                    <View style={estilos.group}>
                        <Text style={estilos.label}>Sintomas</Text>
                        <TextInput value ={sintomas} onChangeText={setSintomas} style= {[estilos.input, estilos.inputSympyoms]} placeholder = "Sintomas" multiline={true}
                        placeholderTextColor={'#666'}></TextInput>
                    </View>

                    <CustomButton title={'Cancelar'}  onPress={() => {
                        clearFields()
                        newDateHandler()
                        }}>
                            <Text>Cancelar</Text>
                    </CustomButton>

                    <CustomButton title={'Registrar Cita'} onPress={() => handlerAppointment()}>
                            <Text>Registrar</Text>
                    </CustomButton>
                    
                    </ScrollView>            
                </SafeAreaView>
            </Modal>)
    )
}


const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e3d5ca'
    },
    input:{
        marginHorizontal: 30,
        marginBottom:10,
        backgroundColor: 'white',
    },
   
    label: {
        paddingLeft: 30,
        marginTop: 15,
        fontSize: 20,
    },
    group:{
        marginHorizontal: 30
    },
    title: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    titleBold: {
        fontWeight: 'bold'
        
    },
    inputSympyoms: {
        fontSize: 16,
        textAlign: 'justify',
        textTransform: 'uppercase',
    }

});
export default Formulario