import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader2 from "../symbols/MaterialHeader2";
import MaterialList9 from "../symbols/MaterialList9";

export default class Userlist extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MaterialHeader2 style={styles.materialHeader2} />
        <MaterialList9 style={styles.materialList9} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  materialHeader2: {
    top: -0.76,
    left: 0,
    width: 360.01,
    height: 56,
    position: "absolute"
  },
  materialList9: {
    top: 55.24,
    left: 0.57,
    width: 359.43,
    height: 584.76,
    position: "absolute"
  }
});
