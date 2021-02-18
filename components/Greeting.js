import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Greeting = () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name here"
        onChangeText={(text) => setName(text)}
      />
      <Text style={{ marginTop: 8 }}>
        Welcome to this CI/CD for React Native course, {name}!
        This course also cover basic Git and Github tutorial!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Greeting;
