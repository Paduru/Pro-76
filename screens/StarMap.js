import React from "react";
import { View, StyleSheet, Text } from "react-native";

function StarMapScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Star Map Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default StarMapScreen;
