import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialHeader21 from "../symbols/MaterialHeader21";
import Icon from "@builderx/icons";

export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MaterialHeader21 style={styles.materialHeader21} />
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text}>Profile</Text>
        <Text style={styles.text2}>Friends List</Text>
        <Text style={styles.text3}>Sign Out</Text>
        <Icon type={"Ionicons"} name={"md-person"} style={styles.icon} />
        <Icon
          type={"MaterialCommunityIcons"}
          name={"account-details"}
          style={styles.icon2}
        />
        <Icon
          type={"MaterialCommunityIcons"}
          name={"logout"}
          style={styles.icon3}
        />
        <Image
          source={require("../assets/images/IMG-20190618-WA0035.jpg")}
          resizeMode={"cover"}
          style={styles.image}
        />
        <Text style={styles.text4}>Nathalia Gabryel</Text>
        <Text style={styles.text5}>nata@gmail.com</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(170,198,232,1)",
    opacity: 1
  },
  materialHeader21: {
    top: -2.15,
    left: 0,
    width: 360,
    height: 56,
    position: "absolute"
  },
  rect: {
    top: 0,
    left: 0,
    width: 268.99,
    height: 640,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    opacity: 0.97
  },
  rect2: {
    top: 0,
    left: 0,
    width: 268.99,
    height: 139.75,
    backgroundColor: "rgba(63,81,181,1)",
    position: "absolute"
  },
  text: {
    top: 164.85,
    left: 51.29,
    width: 51.99,
    height: 19,
    color: "#121212",
    position: "absolute",
    fontSize: 16
  },
  text2: {
    top: 203.95,
    left: 51.29,
    color: "#121212",
    position: "absolute",
    fontSize: 16
  },
  text3: {
    top: 597.99,
    left: 51.29,
    color: "#121212",
    position: "absolute",
    fontSize: 16
  },
  icon: {
    top: 159.85,
    left: 18.61,
    position: "absolute",
    color: "rgba(63,81,181,1)",
    fontSize: 24
  },
  icon2: {
    top: 196.45,
    left: 15.11,
    position: "absolute",
    color: "rgba(63,81,181,1)",
    fontSize: 31
  },
  icon3: {
    top: 593.99,
    left: 18.61,
    position: "absolute",
    color: "rgba(208,2,27,1)",
    fontSize: 24
  },
  image: {
    top: 23.71,
    left: 103.78,
    width: 59.93,
    height: 60.28,
    position: "absolute",
    borderRadius: 100,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2
  },
  text4: {
    top: 96.34,
    left: 70.06,
    width: 128.87,
    height: 19,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16
  },
  text5: {
    top: 115.34,
    left: 86.35,
    width: 93.65,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 512.66,
    fontSize: 12
  }
});
