import React, {Component} from 'react';
import { Image, ScrollView, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Alarm from './Alarm';

  

  const AlarmList = () => {
      return(
          <ScrollView>
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            {/* <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm /> */}
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