import React, { useState } from "react";
import { SafeAreaView, Switch, StyleSheet } from "react-native";

const AlarmSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // passed in own style into own
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{ false: "#156775", true: "#FFCA05" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor={isEnabled ? "#156775" : "156775"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AlarmSwitch;