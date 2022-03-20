import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import AlarmList from './components/AlarmList';
import AddAlarm from './components/AddAlarm';
import { StyleSheet, Button, Text, View, SafeAreaView, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Audio } from 'expo-av';
import songs from './tracks/songs.js'

export default function App() {

  const [sound, setSound] = React.useState();

  async function soundPlay(title, artist) {

    console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        songs[title + artist]
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity  >
      <Image style={styles.mainLogo} source={require('./assets/rooster.png')} />
      </TouchableOpacity>
      <Text style={styles.mainName}>rooster.</Text>
      <Button title="TEST" onPress={() => soundPlay("Check", "Young_Thug")}></Button>
      <StatusBar style="auto" />
      <AlarmList />
      <AddAlarm />
    </SafeAreaView>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
  },
  mainLogo: {
    width: 60,
    height: 50,
    alignSelf: "flex-end",
    marginHorizontal: "5%",

  },
  mainName: {
    fontSize: 23,
    //fontFamily: 'Lato',
    color: '#DD2C14',
    alignSelf: "flex-end",
    marginHorizontal: "30%",
    // marginTop:"5%",
    position: 'absolute',
    paddingRight: "20%", 
    paddingTop: 60, 

  },

});

