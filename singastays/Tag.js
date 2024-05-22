import React from "react";
import { View, Text } from "react-native";

const Tag = ({ label, style }) => {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
};

const styles = {
  tagContainer: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  tagText: {
    color: "white",
  },
};

export default Tag;
