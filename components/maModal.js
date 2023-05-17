import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native';

const MaModal = ({ visible, goal, hidden, onSave }) => {

    const [editedGoal, setEditedGoal] = useState(goal);

    const save = () => {
      onSave(editedGoal);
    };

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
            <TextInput
                style={styles.modalInput}
                value={editedGoal}
                onChangeText={setEditedGoal}
            />
                <Text style={styles.modalText}>{goal}</Text>
            <View style={styles.row}>
                <TouchableOpacity onPress={save} style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={hidden} style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalInput: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 6,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 20,
    },
    modalBtn: {
        padding: 10,
        backgroundColor: '#6F73D2',
        borderRadius: 6,
    },
    modalBtnText: {
        color: 'white',
        fontSize: 16,
    },
    row: {
        flexDirection: "row",
    },
});

export default MaModal;
