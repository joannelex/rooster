import React, { Component } from "react";
import { SafeAreaView, StyleSheet, TextInput, ScrollView , Text, TouchableOpacity} from "react-native";

var minutes = [];

 for (let i = 0; i < 60; i++) {
   minutes[i] = i;

 };
class AlarmTextInput extends Component {
  stateAmPm = {
    names: [
      {
        id: 0,
        name: 'am',
      },
      {
        id: 1,
        name: 'pm', 
      }
    ]
  }

  stateHour = {
    names: [
       {
          id: 0,
          name: '1',
       },
       {
          id: 1,
          name: '2',
       },
       {
          id: 2,
          name: '3',
       },
       {
          id: 3,
          name: '4',
       },
       {
        id: 4,
        name: '5',
     },
     {
        id: 5,
        name: '6',
     },
     {
        id: 6,
        name: '7',
     },
     {
        id: 7,
        name: '8',
     },
     {
      id: 8,
      name: '9',
   },
   {
      id: 9,
      name: '10',
   },
   {
      id: 10,
      name: '11',
   },
   {
    id: 11,
    name: '12',
 }, 
    ]
 }


 alertItemName = (item) => {
    alert(item.name)
 }

 render() {
    return (
      <SafeAreaView style={styles.outsideContainer}>
        <ScrollView style={styles.scrollContainer}>
        <SafeAreaView >
          {
             this.stateHour.names.map((item, index) => (
                <TouchableOpacity
                   key = {item.id}
                   style = {styles.container}
                   onPress = {() => this.alertItemName(item)}>
                   <Text style = {styles.text}>
                      {item.name}
                   </Text>
                </TouchableOpacity>
             ))
          }
       </SafeAreaView>
      </ScrollView>
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView >
          {
             this.stateHour.names.map((item, index) => (
                <TouchableOpacity
                   key = {item.id}
                   style = {styles.container}
                   onPress = {() => this.alertItemName(item)}>
                   <Text style = {styles.text}>
                      {item.name}
                   </Text>
                </TouchableOpacity>
             ))
          }
       </SafeAreaView>
      </ScrollView>
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView >
          {
             this.stateAmPm.names.map((item, index) => (
                <TouchableOpacity
                   key = {item.id}
                   style = {styles.container}
                   onPress = {() => this.alertItemName(item)}>
                   <Text style = {styles.text}>
                      {item.name}
                   </Text>
                </TouchableOpacity>
             ))
          }
       </SafeAreaView>
      </ScrollView>
      </SafeAreaView>
    );
 };
};

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     width: 65, 
     backgroundColor: '#FFCA05',
     opacity: 0.75,
     alignItems: 'center',
     borderRadius: 10, 
  },
 outsideContainer: {
   flexDirection: "row",
   alignItems: "center",
   margin: 20,
   paddingStart: 30, 
 },
 scrollContainer: {
   height: 120,

 },
  text: {
     color: '#4f603c',
     alignSelf: 'center',
  },
})

 

export default AlarmTextInput;
