// Timer Component for MainUI
import React, { useState, useEffect } from 'react';
import { Text, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const Timer = () => {
    // equal to 1 hr and 1 second 
    const [secondsLeft, setSecondsLeft] = useState(3601);
    const [timerOn, setTimerOn] = useState(false);

    useEffect( () => {
        if (timerOn) startTimer();
        else BackgroundTimer.stopBackgroundTimer();

        return () => {
            BackgroundTimer.stopBackgroundTimer()
        };
    }, [timerOn]);


    // function for the clock 
    const clockify = () => {
        let hours = Math.floor(secondsLeft / 60 / 60);
        // find the leftover for the mins 
        let mins = Math.floor(secondsLeft / 60 % 60); 
        let displayHours = hours < 10 ? `0${hours}` : hours; 
        let displayMins = mins < 10 ? `0${mins}`: mins;

        return {
            displayHours, 
            displayMins,
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                {clockify().displayHours} Hours 
                {clockify().displayMins} Mins
            </Text>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',

    },


});

export default Timer;