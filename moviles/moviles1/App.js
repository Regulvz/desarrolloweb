import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Developer</Text>
      <Image source={ require('./assets/fotogato.jpg')} style={styles.imagen}></Image>
      <Text style={styles.head}>Regulvz</Text>
      <Text style={styles.linebelow}>________________</Text>
      <Text style={styles.hobbies}>Hobbies</Text>
      <Text style={styles.hobbiesh2}>- Halo Top 200 Player</Text>
      <Text style={styles.hobbiesh2}>- Programing</Text>
      <Text style={styles.hobbiesh2}>- Cats</Text>
      <Text style={styles.hobbiesh2}>- eSports Psycology</Text>
      <Text style={styles.hobbiesh2}>- Walk</Text>
      <Text style={styles.hobbiesh2}>- Halo Infinite</Text>
      <Text style={styles.hobbiesh2}>- Shooter games</Text>
      <Text style={styles.hobbiesh2}>- Astronomy</Text>
      <Text style={styles.hobbiesh2}>- Eat 🍔🍔</Text>
      <Text style={styles.hobbiesh2}>- Anime ⚔️🗡️🏹🛡️</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  imagen: {
    alignSelf: 'center',
    width: '50%',
    height:'25%',
    borderRadius: 500,
  },
  title:{
    paddingTop: 30,
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
  },
  head: {
    alignSelf: 'center',
    color: '#00ff55',
    fontSize: 15,
  },
  linebelow: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 50,
  },
  hobbies:
  {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
  },
  hobbiesh2:
  {
    paddingLeft: 40,
    flex: 1,
    backgroundColor:'#0FFFFF',
    color:  'black',
    fontSize: 20,
  }
});
