import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const CreateAlarm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Input Alarm</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleClose}>X</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: 300,
    width: 350,
    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    width: 70,
    height: 70, 
    backgroundColor: '#FFCA0580',
  },
  buttonOpen: {
    backgroundColor: "#FFCA0580",
  },
  buttonClose: {
    backgroundColor: "#156775",
    opacity: 0.75,
  },
  textStyle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#DD2C14',
    alignSelf: 'center',
    opacity: 0.75,
    alignSelf: 'center',
  },
  textStyleClose: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    opacity: 0.75,
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center", 
    color: "#DD2C14",
    
  }
});

export default CreateAlarm;