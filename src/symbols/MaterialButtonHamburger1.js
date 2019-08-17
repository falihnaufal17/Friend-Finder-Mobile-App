import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialButtonHamburger1 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon
          name={"account-details"}
          type={"MaterialCommunityIcons"}
          style={styles.caption}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(0,117,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    fontFamily: "roboto-regular"
  }
});
