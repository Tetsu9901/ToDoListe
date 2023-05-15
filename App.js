import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [sampleGoals, setGoals] = useState([
    { key: "Faire les courses" },
    { key: "Aller à la salle de sport 3 fois par semaine" },
    { key: "Monter à plus de 5000m d'altitude" },
    { key: "Acheter mon premier appartement" },
    { key: "Perdre 5kgs" },
    { key: "Gagner en productivité" },
    { key: "Apprendre un nouveau langage" },
    { key: "Faire une mission en freelance" },
    { key: "Organiser un meetup autour de la tech" },
    { key: "Faire un triathlon" },
  ]);
  const addGoal = () => {
    text && setGoals([...sampleGoals, { key: text }]);
  };
  deleteGoal = (key) => {
    setGoals(sampleGoals => sampleGoals.filter((item, i) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.red}>
        Open up <Text style={styles.bold}>App.js</Text> to start working on your
        app!
      </Text>
    <View style={styles.row}>
      <TextInput
        placeholder="Type here to add a line"
        onChangeText={(text) => setText(text)}
        value={text}
      ></TextInput>
      <Pressable onPress={addGoal}>
        <Text style={styles.buttonAdd}>Add</Text>
      </Pressable>
    </View>
      <FlatList
        data={sampleGoals}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.key}</Text>
            <TouchableOpacity onPress={()=>this.deleteGoal(item.key)} style={styles.buttonDelete}>
              <Text style={styles.textBtnDel}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#D9F0FF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  red: {
    color: "red",
    fontSize: 18,
    marginBottom: 20
  },
  buttonAdd: {
    padding: 10,
    color: "blue",
    fontSize: 18,
  },
  blue: {
    color: "blue",
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 15,
    padding: 9,
    borderRadius: 6,
  },
  buttonDelete: {
    alignItems: "center",
    backgroundColor: "#6F73D2",
    marginBottom: 1,
    marginLeft: 25,
    padding: 9,
    borderRadius: 6,
  },
  textBtnDel: {
    color: 'white',
  }
});
