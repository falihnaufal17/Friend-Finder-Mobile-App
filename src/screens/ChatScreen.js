import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Center } from "@builderx/utils";
import MaterialHeader13 from "../symbols/MaterialHeader13";
import MaterialCardWithoutImage1 from "../symbols/MaterialCardWithoutImage1";
import MaterialCardWithoutImage2 from "../symbols/MaterialCardWithoutImage2";
import MaterialRightIconTextbox1 from "../symbols/MaterialRightIconTextbox1";

export default class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <MaterialHeader13 style={styles.materialHeader13} />
        </Center>
        <MaterialCardWithoutImage1 style={styles.materialCardWithoutImage1} />
        <MaterialCardWithoutImage2 style={styles.materialCardWithoutImage2} />
        <Center horizontal>
          <MaterialRightIconTextbox1 style={styles.materialRightIconTextbox1} />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 0
  },
  materialHeader13: {
    top: 0,
    width: 360,
    height: 56,
    position: "absolute"
  },
  materialCardWithoutImage1: {
    top: 155.87,
    left: 180,
    width: 169.84,
    height: 51.4,
    backgroundColor: "rgba(64,84,181,1)",
    position: "absolute",
    borderRadius: 11
  },
  materialCardWithoutImage2: {
    top: 70.39,
    left: 11.09,
    width: 168.91,
    height: 69.3,
    position: "absolute",
    borderRadius: 10
  },
  materialRightIconTextbox1: {
    top: 575.59,
    width: 338.74,
    height: 43,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  }
});
