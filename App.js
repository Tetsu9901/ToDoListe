import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>
        Open up <Text style={styles.bold}>App.js</Text> to start working on your
        app!
      </Text>
      <View>
        {sampleGoals.map((sampleGoals) => {
          return (
            <View>
              <Text style={styles.item}>{sampleGoals}</Text>
            </View>
          );
        })}
      </View>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 75,
  },
  red: {
    color: "red",
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  raw: {
    flexDirection: "row",
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 30,
  },
});

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Montaer à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];
