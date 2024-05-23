import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function ProfileScreen() {
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/profile-image.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Name: Dummy Text</Text>
      <Text>Email Address</Text>
      <Text>Contact Number</Text>
      <Text>Short Description</Text>
      <Button title="Log Out" onPress={handleLogout} />
      <Text>List of User Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
