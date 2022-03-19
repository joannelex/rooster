import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, LayoutAnimation } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity  >
      <Image style={styles.mainLogo} source={require('./assets/rooster.png')} />
      </TouchableOpacity>
      <Text style={styles.mainName}>rooster.</Text>
      <StatusBar style="auto" />
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
    paddingTop: 35, 

  },

});
