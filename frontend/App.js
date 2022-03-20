import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import AlarmList from './components/AlarmList';
import AddAlarm from './components/AddAlarm';
import CreateAlarm from './components/CreateAlarm';
import AlarmOff from './components/AlarmOff';
import React, {Component} from 'react';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import Swipeable from 'react-native-swipeable-row';
import { Audio } from 'expo-av';
import songs from './tracks/songs.js'

import { StyleSheet, 
        Text, 
        View, 
        SafeAreaView, 
        Image, 
        TouchableOpacity,} from 'react-native';



const alarms = ['7:11 am', '7:30 am', '8:30 am'];
const cadd = false;
const [sound, setSound] = React.useState();
 const [title, setTitle] = React.useState("Lyric_Pieces_Book_I_Op_12_I_Arietta"); //
 const [artist, setArtist] = React.useState("Edvard_Grieg");
// const currTime = this.state.currentTime;

// const Child = forwardRef((props, ref) => {
//   useImperativeHandle(
//       ref,
//       () => ({
//           showAlert() {
//               alert("Child Function Called")
//           }
//       }),
//   )
//   return (
//      <div>Child Component</div>
//   )
// })
const checkTime = () => {
  let currTime = this.setState.currentTime;
  let currAlarm = alarms[0];
  console.log(currTime === currAlarm);
  return (currTime === currAlarm);
}

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  }

  checkTime() {
    let currTime = this.setState.currentTime;
    let currAlarm = alarms[0];
    console.log(currTime === currAlarm);
    return (currTime === currAlarm);
  }
  
  componentWillMount() {
    this.getCurrentTime();
    this.checkTime();
  }

  checkTime = () => {

  };

  getCurrentTime = () => {
    let Hr = new Date().getHours();
    let Min = new Date().getMinutes();
    let Sec = new Date().getSeconds();
    let AmPm = 'pm';

    if (Min < 10) { Min = '0' + Min; }
    if (Sec < 10) { Sec = '0' + Sec; }
    if (Hr > 12) { Hr = Hr - 12; }
    if (Hr == 0) { Hr = 12; }
    if (new Date().getHours() < 12) { AmPm = 'am'; }

    this.setState({ currentTime: Hr + ':' + Min + ':' + Sec + ' ' + AmPm});

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item});
      }
    })
  }


  componentWillUnmount() {
    clearInterval();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  
  async soundPlay() {
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
  
  async getNewMusic(rxnTime) {
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

  renderA() {
      return (
        <SafeAreaView style={stylesA.container}>
          <TouchableOpacity>
          <Image style={stylesA.mainLogo} source={require('./assets/rooster.png')} />
          </TouchableOpacity>
          <Text style={stylesA.mainName}>rooster.</Text>
          <Text style={stylesA.daysText}>{this.state.currentDay}</Text>
          <Text style={stylesA.timeText}>{this.state.currentTime}</Text>
          
          <AlarmList />
          <CreateAlarm />
          
          <StatusBar style="auto" />
        </SafeAreaView>
      );
  }

  renderB() {
    return (
      <SafeAreaView style={stylesB.container}>
        <Text style={stylesB.text}>  </Text>
        <Text style={stylesB.text}>cock-a- {"\n"}doodle-do.</Text>
                      
        <StatusBar style="auto" />
        <Image 
          source = {require('./assets/rooster-wakeup.png')} style={stylesB.image} />
  
        <TouchableOpacity
            style={stylesB.topButton}
            //onPress={() => navigate('HomeScreen')}
            onPress={() => alert('Wake Up !')} 
            // onPress={this.renderA}
            // onPress={() => this.renderA()} 
            // onPress={() => this.renderA()} 

            >
            <Text style={stylesB.buttonText}>awake</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
            style={stylesB.bottomButton}
            //onPress={() => navigate('HomeScreen')}
            onPress={() => alert('cock-a-doodle-do in 5 min')} 
            // onPress={() => this.renderA() } 
            >
            <Text style={stylesB.buttonText}>snooze</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  render() {
    let Hr = new Date().getHours();
    let Min = new Date().getMinutes();
    let AmPm = 'pm';
    if (new Date().getHours() < 12) { AmPm = 'am'; }
    const currTime = Hr + ':' + Min + ' ' + AmPm;

    // let currAlarm = alarms[0];
    // console.log('hello');
    // console.log(currTime == alarms[0]);
    return (
      <SafeAreaView>
        {currTime === alarms[0] ? this.renderB() : this.renderA()}
        {/* {this.renderA()} */}
      </SafeAreaView>
    );    
  }
}



const stylesA = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    //flexDirection: 'column',
    // justifyContent: 'center',
    
  },
  mainLogo: {
    width: 60,
    height: 50,
    alignSelf: "flex-end",
    marginHorizontal: "5%",
    marginTop:"15%",

  },
  mainName: {
    fontSize: 23,
    color: '#DD2C14',
    alignSelf: "flex-end",
    marginHorizontal: "30%",
    marginTop:"5%",
    position: 'absolute',
    paddingRight: "20%", 
    paddingTop: 60, 

  },
  headerText: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: 'black',
    fontWeight: "bold"
  },
  timeText: {
    fontSize: 40,
    color: '#156775',
    marginLeft: 50,
    
  },
  daysText: {
    color: '#FFCA05',
    fontSize: 25,
    paddingBottom: 0,
    marginLeft: 50,
    marginTop: 50,
  },
  // adding: {
  //   position: 'absolute',
  //   marginTop: 250,
  // },
});

const stylesB = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'rgba(221, 44, 20, 0.75)',
    height: '150%',
    marginTop:-50
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 300,
    alignSelf: 'center',

  },
  text: {
    marginTop: 50,
    color: 'white', 
    fontSize: 45, 
    alignSelf: 'flex-start',
    paddingLeft: '15%' 
  },
  topButton:{
    backgroundColor: '#FFCA05',
    marginTop: 310,
    width: '30%',
    height: '3%',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#FFCA05',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomButton:{
    backgroundColor: '#156775',
    marginTop: 30,
    width: '30%',
    height: '3%',
    borderRadius:60,
    borderWidth: 1,
    borderColor: '#156775',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 20, 
    alignSelf: 'center',
  },

});