import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput, Pressable } from "react-native";
import React, { useState } from 'react';
import MaModal from './maModal';

const MaFlatlist = () => {
    const [text, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);
    
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
        setText("");
    };

    const deleteGoal = (key) => {
        setGoals(sampleGoals => sampleGoals.filter((item) => item.key !== key));
    };

    const openModal = (goal) => {
        setSelectedGoal(goal);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    placeholder="Type here to add a line"
                    onChangeText={(text) => setText(text)}
                    value={text}
                />
                <Pressable onPress={addGoal}>
                    <Text style={styles.buttonAdd}>Add</Text>
                </Pressable>
            </View>
            <FlatList
                data={sampleGoals}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => openModal(item.key)}>
                            <Text>{item.key}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteGoal(item.key)} style={styles.buttonDelete}>
                            <Text style={styles.textBtnDel}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <MaModal visible={modalVisible} goal={selectedGoal} hidden={closeModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    },
    row: {
        flexDirection: "row",
    },
    buttonAdd: {
        padding: 10,
        color: "blue",
        fontSize: 18,
    },
});

export default MaFlatlist;
