import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Image, 
  Button, 
  TouchableOpacity} from 'react-native';

import React from 'react';


export default function AlarmOff() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>  </Text>
      <Text style={styles.text}>cock-a- {"\n"}doodle-do.</Text>
                    
      <StatusBar style="auto" />
      <Image 
        source = {require('./assets/rooster-wakeup.png')} style={styles.image} />

      <TouchableOpacity
          style={styles.topButton}
          //onPress={() => navigate('HomeScreen')}
          onPress={() => Alert.alert('Top button pressed')} >
          <Text style={styles.buttonText}>awake</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.bottomButton}
          //onPress={() => navigate('HomeScreen')}
          onPress={() => Alert.alert('Bottom button pressed')} >
          <Text style={styles.buttonText}>snooze</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(221, 44, 20, 0.75)',

  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 250,
    alignSelf: 'center',

  },
  text: {
    marginTop: 15,
    color: 'white', 
    fontSize: 45, 
    alignSelf: 'flex-start',
    paddingLeft: '15%' 
  },
  topButton:{
    backgroundColor: '#FFCA05',
    marginTop: 290,
    width: '50%',
    height: '7%',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#FFCA05',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomButton:{
    backgroundColor: '#156775',
    marginTop: 30,
    width: '50%',
    height: '7%',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#156775',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 25, 
    alignSelf: 'center',
  },

});