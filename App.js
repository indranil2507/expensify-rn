import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./Screens/Home";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./Screens/Profile";

export default function App() {
  return (
    <View>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
