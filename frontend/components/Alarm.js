import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AlarmSwitch from './AlarmSwitch';
import Swipeable from 'react-native-swipeable-row';



const Alarm = () => {

    return(
      <Swipeable 
        rightButtons = {[
            <TouchableOpacity style={[styles.deleteButton, {backgroundColor: '#156775'}]}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>,
            <TouchableOpacity style={[styles.deleteButton, {backgroundColor: '#FFCA05'}]}>
              <Text style={styles.buttonText}>cancel</Text>
            </TouchableOpacity>
      ]}>
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.RectangleShape}>
            <View style={styles.ToggleView}>
            <AlarmSwitch /> 
            </View>
            <Text style={styles.TextTime}>09:00 {'\n'}am</Text>
            </ SafeAreaView>
        </SafeAreaView>
      </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "white",
    },
    TextTime: {
      fontSize: 35,
      color: 'white',
      alignSelf: 'flex-end',
      paddingRight: 10, 
      margin: 15,
      textAlign: 'left',
      left: 0,
      right: 0,
      width: 105,
      marginLeft: 50,
      position: 'absolute',
    
    },
    RectangleShape: { 
      marginTop: 20,
      width: 298,
      height: 114,
      backgroundColor: '#DD2C14',
      borderRadius: 15,
      opacity: 0.75,
      justifyContent: "center",
      alignItems: "flex-start", 
      },
      
    ToggleView: {
        alignSelf: 'center',
        width: "10%",
        paddingLeft: 160,
        position: 'absolute',
        
    },
    deleteButton:{
      flex: 1,
      justifyContent: 'center',
      width: '20%',
      height: '10%',
      marginTop: 22,
      // borderRadius: 15,
    },
    buttonText: {
      color: 'white', 
      fontSize: 13, 
      alignSelf: 'center',
      borderRadius: 15,
    },
      
  
  });

  export default Alarm;

