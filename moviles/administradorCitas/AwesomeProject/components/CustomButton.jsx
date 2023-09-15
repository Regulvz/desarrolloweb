import { Pressable, StyleSheet, Text } from "react-native"

const CustomButton = ({title, onPress})=> {
    return (<Pressable onPress={onPress} 
    style={styles.buttonStyle}>
            <Text style={styles.textButton}>{title}</Text>
        </Pressable>
            )
}
const styles = StyleSheet.create({
buttonStyle: {
    padding: 10,    
    backgroundColor: '#a345d3',
    borderRadius:10,
    marginHorizontal: 30,
    margin: 10
    
    },
    textButton:{
        color: 'white'
    }
})
export default CustomButton