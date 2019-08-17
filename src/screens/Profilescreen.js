import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class Profilescreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/friends_main5.jpg")}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Center horizontal>
          <Image
            source={require("../assets/images/IMG-20190618-WA0035.jpg")}
            resizeMode={"cover"}
            style={styles.image2}
          />
        </Center>
        <Center>
          <Text style={styles.text}>Nathalia Gabryel</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>nata@gmail.com</Text>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  image: {
    top: 0,
    left: 0,
    width: 360,
    height: 640,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.6
  },
  image2: {
    top: "31.27%",
    width: 99.93,
    height: 100.28,
    position: "absolute",
    borderRadius: 100,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2
  },
  text: {
    width: 137.87,
    height: 19,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold"
  },
  text2: {
    top: 333.13,
    width: 103.4,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 294.87,
    fontSize: 12,
    fontWeight: "bold"
  }
});
