import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Text } from "react-native";
import { Center } from "@builderx/utils";
import MaterialButtonShare8 from "../../symbols/MaterialButtonShare8";
import MaterialIconTextbox12 from "../../symbols/MaterialIconTextbox12";
import MaterialIconTextbox13 from "../../symbols/MaterialIconTextbox13";
import MaterialIconTextbox14 from "../../symbols/MaterialIconTextbox14";

export default class Registerscreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../../assets/images/1800x1200_diabetes_what_friends_should_know_slideshow9.jpg")}
          resizeMode={'cover'}
          style={styles.image}
        />
        <StatusBar hidden={true} style={styles.statusBar} />
        <Center horizontal>
          <Text style={styles.text}>SIGN UP</Text>
        </Center>
        <Text style={styles.text2}>SIGN IN</Text>
        <MaterialButtonShare8 style={styles.materialButtonShare8} />
        <MaterialIconTextbox12 style={styles.materialIconTextbox12} />
        <MaterialIconTextbox13 style={styles.materialIconTextbox13} />
        <MaterialIconTextbox14 style={styles.materialIconTextbox14} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(208,2,27,1)",
    opacity: 0.8
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.8
  },
  statusBar: {},
  text: {
    top: 133.21,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 60,
    fontWeight: "bold"
  },
  text2: {
    top: 436.73,
    left: 28.72,
    color: "rgba(217,221,220,1)",
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left"
  },
  materialButtonShare8: {
    top: 421.23,
    left: 278.79,
    width: 56,
    height: 56,
    position: "absolute"
  },
  materialIconTextbox12: {
    top: 231.05,
    left: 28.72,
    width: 306.07,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100
  },
  materialIconTextbox13: {
    top: 298.5,
    left: 28.72,
    width: 306.07,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100
  },
  materialIconTextbox14: {
    top: 365.95,
    left: 28.72,
    width: 306.07,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100
  }
});
