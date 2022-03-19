import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Image, } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>cock-a-</Text>

      <Text style={styles.text}>doodle-do.</Text>
                    
      <StatusBar style="auto" />
      <Image 
        source = {require('./assets/rooster-wakeup.png')} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(221, 44, 20, 0.80)',
    // opacity: 0.87,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'flex-start',

  },
  text: {
    color: 'white', 
    fontSize: 45, 
    alignSelf: 'flex-start',
    paddingLeft: '10%'
    // paddingTop:'30%'
  },
  // text2: {
  //   color: 'white', 
  //   fontSize: 45, 
  //   alignSelf: 'flex-start',
  //   paddingLeft: '10%'
  // },
});
