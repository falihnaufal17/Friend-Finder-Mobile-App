import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class MaterialChipWithImage extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/images/IMG-20190402-WA0008.jpg")}
          style={styles.leftImage}
        />
        <Text style={styles.chipText}>Hi!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50
  },
  leftImage: {
    width: 32,
    height: 32,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  chipText: {
    color: "rgba(0,0,0,0.87)",
    paddingRight: 12,
    paddingLeft: 8,
    fontSize: 13
  }
});
