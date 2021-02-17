import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput value="Ariq Daffa" />
      <Text>Welcome to this CI/CD Course!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
