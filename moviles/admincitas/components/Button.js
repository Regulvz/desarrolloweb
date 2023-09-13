import { Pressable, StyleSheet, Text } from "react-native"

const CustomButton = ({title, onPress})=> {
    return (<Pressable onPress={onPress} 
    style={StyleSheet.create(
        {
    padding: 10,
    width: 102,
    backgroundColor: 'green',
    borderRadius:10,
    marginHorizontal: 400,
        }
    )}>
            <Text style={style.buttonStyle}>{title}</Text>
        </Pressable>
            )
}
const style = StyleSheet.create({
buttonStyle: {
    padding: 10,
    width: 102,
    backgroundColor: 'green',
    borderRadius:10,
    marginHorizontal: 400,
    }
})
export default CustomButton