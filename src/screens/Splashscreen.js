import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class Splashscreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/friends_main4.jpg")}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <StatusBar animated={false} hidden={true} style={styles.statusBar} />
        <Center>
          <Text style={styles.text}>
            FIND{"\n"}YOUR{"\n"}BEST FRIEND!
          </Text>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(64,84,181,1)",
    flexDirection: "row",
    opacity: 1
  },
  image: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.7
  },
  statusBar: {},
  text: {
    width: 360,
    height: 240,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center"
  }
});
