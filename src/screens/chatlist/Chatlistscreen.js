import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader14 from "../../symbols/MaterialHeader14";
import MaterialList121 from "../../symbols/MaterialList121";

export default class Chatlistscreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MaterialHeader14 style={styles.materialHeader14} />
        <MaterialList121 style={styles.materialList121} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  materialHeader14: {
    top: 0,
    left: 0.14,
    width: 359.86,
    height: 56,
    position: "absolute"
  },
  materialList121: {
    top: 56,
    left: 0.14,
    width: 359.86,
    height: 584,
    position: "absolute"
  }
});
