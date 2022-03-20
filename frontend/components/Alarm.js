import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import AlarmSwitch from './AlarmSwitch';

const Alarm = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.RectangleShape}>
            <View style={styles.ToggleView}>
            <AlarmSwitch /> 
            </View>
            
            <Text style={styles.TextTime}>{props.time} {'\n'}{props.AmPm}</Text>
            </ SafeAreaView>
        </SafeAreaView>

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
        
    }

      
  
  });

  export default Alarm;

