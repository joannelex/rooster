import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import AlarmTextInput  from "./AlarmTextInput";
import Alarm from './Alarm'

const CreateAlarm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alarm, setAlarm] = useState([<Alarm />, <Alarm />, <Alarm />]);
  
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
            <Text style={styles.textHMAmPm}>Hour          Mins     </Text>

            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyleClose}>X</Text>
            </Pressable>
            <AlarmTextInput />

          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
        onPressIn={() => setAlarm([...alarm, <Alarm/>])}
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
    alignSelf: "flex-start",
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50, 
    margin: 30,
    position: "absolute",
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
    fontSize: 20,
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
    
  }, 
  textHMAmPm: {
    position: "absolute",
    marginBottom: 15,
    textAlign: "center", 
    color: "#DD2C14",
    paddingTop: 70,
    paddingRight: 50,

    
  },
});

export default CreateAlarm;