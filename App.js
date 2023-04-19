import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Open up <Text style={styles.bold}>App.js</Text> to start working on your app!</Text>
      <FlatList data={sampleGoals} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
      <View style={styles.raw}>
      <TextInput placeholder="Type here to translate!"></TextInput>
      <Button title="Add"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  red:{
    color:'red',
    fontSize: 18,
  },
  bold:{
    fontWeight:'bold',
  },
  raw:{
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 30,
  },
});

const sampleGoals = [
  {key: "Faire les courses"},
  {key: "Aller à la salle de sport 3 fois par semaine"},
  {key: "Montaer à plus de 5000m d'altitude"},
  {key: "Acheter mon premier appartement"},
  {key: "Perdre 5kgs"},
  {key: "Gagner en productivité"},
  {key: "Apprendre un nouveau langage"},
  {key: "Faire une mission en freelance"},
  {key: "Organiser un meetup autour de la tech"},
  {key: "Faire un triathlon"}
];
