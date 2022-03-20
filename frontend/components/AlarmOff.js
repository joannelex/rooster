import { StatusBar } from 'expo-status-bar';
import Swipeable from 'react-native-swipeable-row';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Image, 
  Button, 
  TouchableOpacity} from 'react-native';

import React from 'react';



const AlarmOff = () => {

const [sound, setSound] = React.useState();
const [title, setTitle] = React.useState("Lyric_Pieces_Book_I_Op_12_I_Arietta"); 
const [artist, setArtist] = React.useState("Edvard_Grieg");

async function soundPlay() {
  console.log(title + " " + artist)
  console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      songs[title + artist]
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
    sound.setPositionAsync(55000)

    await getNewMusic(3)
}

React.useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
}, [sound]);

async function getNewMusic(rxnTime) {
  fetch(`http://127.0.0.1:5000/get/${title}/${artist}/${rxnTime}`, {
    method: 'GET'
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    setTitle(data.title.replace(" ", "_"))
    setArtist(data.artist.replace(" ", "_"))
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>  </Text>
      <Text style={styles.text}>cock-a- {"\n"}doodle-do.</Text>
                    
      <StatusBar style="auto" />
      <Image 
        source = {require('../assets/rooster-wakeup.png')} style={styles.image} />

      <TouchableOpacity
          style={styles.topButton}
          //onPress={() => navigate('HomeScreen')}
          onPress={() => sound.unloadAsync()} >
          <Text style={styles.buttonText}>awake</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.bottomButton}
          //onPress={() => navigate('HomeScreen')}
          onPress={() => alert('Bottom button pressed')} >
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

export default AlarmOff; 