import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialButtonShare from "../../symbols/MaterialButtonShare";
import { Center } from "@builderx/utils";
import MaterialButtonShare2 from "../../symbols/MaterialButtonShare2";
import MaterialButtonShare3 from "../../symbols/MaterialButtonShare3";
import MaterialIconTextbox10 from "../../symbols/MaterialIconTextbox10";
import MaterialIconTextbox11 from "../../symbols/MaterialIconTextbox11";

export default class Loginscreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../../assets/images/94545326-cheerful-friends-taking-selfie-on-a-holiday-group-of-men-and-women-sitting-outdoors-on-a-summer-day-2.jpg")}
          resizeMode={"cover"}
          style={styles.image}
        />
        <MaterialButtonShare style={styles.materialButtonShare} />
        <Text style={styles.text}>SIGN UP</Text>
        <Center horizontal>
          <Text style={styles.text3}>Or{"\n"}Login with</Text>
        </Center>
        <MaterialButtonShare2 style={styles.materialButtonShare2} />
        <MaterialButtonShare3 style={styles.materialButtonShare3} />
        <Text style={styles.text2}>SIGN IN</Text>
        <MaterialIconTextbox10 style={styles.materialIconTextbox10} />
        <MaterialIconTextbox11 style={styles.materialIconTextbox11} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0
  },
  image: {
    top: 0,
    left: -393.59,
    width: 753.59,
    height: 640,
    position: "absolute",
    opacity: 0.8
  },
  materialButtonShare: {
    top: 421.23,
    left: 272.49,
    width: 56,
    height: 56,
    backgroundColor: "rgba(80,227,194,1)",
    position: "absolute",
    shadowOffset: {
      height: 2,
      width: 3
    },
    shadowColor: "rgba(74,74,74,1)",
    shadowOpacity: 1
  },
  text: {
    top: 436.73,
    left: 28.72,
    color: "rgba(217,221,220,1)",
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left"
  },
  text3: {
    top: 478.34,
    color: "rgba(217,221,220,1)",
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  materialButtonShare2: {
    top: 529.57,
    left: 127.33,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialButtonShare3: {
    top: 529.57,
    left: 192.17,
    width: 40.5,
    height: 40,
    position: "absolute"
  },
  text2: {
    top: 147.41,
    left: "16.98%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "justify"
  },
  materialIconTextbox10: {
    top: 249.09,
    left: 28.72,
    width: 299.77,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100
  },
  materialIconTextbox11: {
    top: 325.89,
    left: 28.72,
    width: 299.77,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderRadius: 100
  }
});
