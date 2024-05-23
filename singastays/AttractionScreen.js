import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AttractionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Attraction Screen!</Text>
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
