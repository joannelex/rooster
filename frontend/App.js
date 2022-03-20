import { StatusBar } from 'expo-status-bar';
import AlarmList from './components/AlarmList';
import AddAlarm from './components/AddAlarm';

import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, AppRegistry, Platform } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentTime: null, currentDay: null }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

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

    this.setState({ currentTime: Hr + ':' + Min + ':' + Sec  + ' ' + AmPm});

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item});
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
      return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity>
          <Image style={styles.mainLogo} source={require('./assets/rooster.png')} />
          </TouchableOpacity>
          <Text style={styles.mainName}>rooster.</Text>
          <StatusBar style="auto" />
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
          <AlarmList />
          <AddAlarm />
        </SafeAreaView>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainLogo: {
    width: 60,
    height: 50,
    alignSelf: "flex-end",
    marginHorizontal: "5%",
    marginTop:"5%",

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

});

