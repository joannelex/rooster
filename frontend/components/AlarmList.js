import React, {useState} from 'react';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import Alarm from './Alarm';
import CreateAlarm from './CreateAlarm';


  const AlarmList = () => {


      return(
          <ScrollView>
          <Alarm time="06:00" AmPm="am"/>
          <Alarm time="07:30" AmPm="am"/>
          <Alarm time="08:00" AmPm="am"/>
          <Alarm time="09:00" AmPm="am"/>
          <Alarm time="10:00" AmPm="am" />
          <Alarm time="10:50" AmPm="pm"/>
          <Alarm time="11:00" AmPm="pm"/>
        </ScrollView>
      );

  };

  const styles = StyleSheet.create({
    mainLogo: {
        width: 60,
        height: 50,
        alignSelf: "flex-end",
        marginHorizontal: "5%",
    
      },
  });


  export default AlarmList; 