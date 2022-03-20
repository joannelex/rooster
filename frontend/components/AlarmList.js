
import {useState} from 'react';
// import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import React, {Component} from 'react';
import { Image, ScrollView, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Alarm from './Alarm';
import CreateAlarm from './CreateAlarm';
import { SafeAreaView } from 'react-native-safe-area-context';


  

  const AlarmList = () => {
      return(
        <View >
            <ScrollView>
            <Alarm time="06:00" AmPm="am"/>
            <Alarm time="07:30" AmPm="am"/>
            <Alarm time="08:00" AmPm="am"/>
            {/* <Alarm time="09:00" AmPm="am"/>
            <Alarm time="10:00" AmPm="am" />
            <Alarm time="10:50" AmPm="pm"/>
            <Alarm time="11:00" AmPm="pm"/> */}
          </ScrollView>
        </View>
      );

  };

  const styles = StyleSheet.create({
    mainLogo: {
        width: 60,
        height: 50,
        alignSelf: "flex-end",
        marginHorizontal: "5%",
    
      },
    // container: {
      // flex: 1,
      // position: 'relative',
      // paddingVertical: 'vertical',
      // flexGrow: 1,
      // paddingBottom: 60,
    // }
  });


  export default AlarmList; 