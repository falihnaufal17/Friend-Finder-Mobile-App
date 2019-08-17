import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class MaterialChipWithImage1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/images/IMG-20190421-WA0024.jpg")}
          resizeMode={"cover"}
          style={styles.image}
        />
        <Text style={styles.text}>Hi! Nice to meet you</Text>
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
  image: {
    top: 0,
    width: 32,
    height: 32,
    position: "absolute",
    right: -1.18,
    borderRadius: 100
  },
  text: {
    color: "rgba(0,0,0,0.87)",
    paddingRight: 12,
    paddingLeft: 8,
    fontSize: 13
  }
});
