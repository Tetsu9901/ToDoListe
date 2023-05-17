import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

const MaModal = ({ visible, goal, hidden }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>{goal}</Text>
        <TouchableOpacity onPress={hidden} style={styles.modalCloseBtn}>
          <Text style={styles.modalCloseBtnText}>Close</Text>
        </TouchableOpacity>
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
  modalText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  modalCloseBtn: {
    padding: 10,
    backgroundColor: '#6F73D2',
    borderRadius: 6,
  },
  modalCloseBtnText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MaModal;
