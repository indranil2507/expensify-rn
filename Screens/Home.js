import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeImg}>
        <Image
          style={{ width: 260, height: 260, borderRadius: 32 }}
          source={require("../assets/walletHome.png")}
        />
      </View>
      <View style={styles.homeIntro}>
        <Text style={styles.homeText}>
          A One stop destination for all your e-budget calculator. Keep a track
          of your expenses easily.
        </Text>
        <View style={styles.homeButton}>
          <Text style={{ fontSize: 22, color: "#000" }}>Get Started</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  homeImg: {
    // height: "60%",
    flex: 2.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeIntro: {
    flex: 1,
    display: "flex",
    paddingTop: 80,
    // justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.lightGrey,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  homeText: {
    paddingHorizontal: 50,
    fontSize: 18,
    textAlign: "center",
  },
  homeButton: {
    // width: 250,
    marginTop: 50,
    backgroundColor: colors.darkgrey,
    fontSize: 24,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 15,
  },
});
