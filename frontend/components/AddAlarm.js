import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

export default function Button(props) {
  const { onPress, title = '+' } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    width: 70,
    height: 70, 
    backgroundColor: '#FFCA0580',
    //opacity: 0.75,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#DD2C14',
    alignSelf: 'center',
    opacity: 0.75,
    alignSelf: 'center',
  },
});
