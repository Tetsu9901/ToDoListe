import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
} from "react-native";
import MaFlatlist from "./components/maFlatList";

export default function App() {

  const img = {uri : "https://e0.pxfuel.com/wallpapers/206/460/desktop-wallpaper-i-made-some-from-mars-to-sirius-to-my-cell-phone-hope-you-guys-enjoy-it-gojira.jpg"};

  return (
    <View style={styles.root}>
      <ImageBackground source={img} style={styles.container}>
        <Text style={styles.red}>
          Open up <Text style={styles.bold}>App.js</Text> to start working on your
          app!
        </Text>
        <MaFlatlist />
        <StatusBar style="auto" />
      </ImageBackground>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 55,
    justifyContent: "center",
  },root:{
    flex: 1,
  },
  red: {
    color: "red",
    fontSize: 18,
    marginBottom: 20
  },
  blue: {
    color: "blue",
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
});
