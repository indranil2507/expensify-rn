import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <Text>Indranil</Text>
        </View>
      </View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    paddingVertical: 100,
  },
});
