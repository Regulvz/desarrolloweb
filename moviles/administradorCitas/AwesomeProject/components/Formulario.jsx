import {Modal, SafeAreaView,Text, StyleSheet, View, TextInput, Button, Pressable} from "react-native"
import DatePicker from "react-native-date-picker"
import { useState } from "react"
const Formulario = ({modalVisible, newDateHandler}) => {
    const [date, setDate] = useState(new Date())
    return(
        <Modal 
            animationType="slide"
            visible= {modalVisible}
            >
                <SafeAreaView style={style.container}>
                    <Text style={style.title}>
                        Nueva {''}
                    <Text style={style.titleBold}>cita</Text>
                    </Text>
                    <View>
                        <Text 
                        style={style.label}>Nombre del paciente</Text>
                        <TextInput 
                        style= {style.input}
                        placeholder = "Nombre del paciente" 
                        placeholderTextColor={'#666'}></TextInput>
                    </View>
                    <View>
                        <Text 
                        style={style.label}>Email del Paciente</Text>
                        <TextInput 
                        style= {style.input}
                        placeholder = "email" 
                        placeholderTextColor={'#666'}></TextInput>
                    </View>
                    <View>
                        <Text 
                        style={style.label}>Numero de telefono del paciente</Text>
                        <TextInput 
                        style= {style.input}
                        placeholder = "Numero de telefono del paciente" 
                        placeholderTextColor={'#666'}></TextInput>
                    </View>
                    <View Style={style.group}>
                        <Text style={style.label}></Text>
                        <DatePicker date={date}></DatePicker>
                    </View>
                    <View>
                        <Text 
                        style={style.label}>Sintomas</Text>
                        <TextInput 
                        style= {[style.input, style.inputSympyoms]}
                        placeholder = "Sintomas" 
                        multiline={true}
                        placeholderTextColor={'#666'}></TextInput>
                    </View>
                    <Pressable
                        style={style.buttonStyle}
                        onPress={newDateHandler}><Text>Registrar</Text></Pressable>
                </SafeAreaView>
            </Modal>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e3d5ca'
    },
    input:{
        marginHorizontal: 30,
        marginBottom:50,
        backgroundColor: 'white',
    },
    buttonStyle: {
        padding: 10,
        width: 102,
        backgroundColor: 'green',
        borderRadius:50,
        marginHorizontal: 400,
    },
    label: {
        paddingLeft: 30,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 600,

    },
    title: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    titleBold: {
        fontWeight: 900,
    },
    inputSympyoms: {
        fontSize: 16,
        textAlign: 'justify',
        textTransform: 'uppercase',
    }

});
export default Formulario