import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialSearchBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <TextInput placeholder={"Search"} style={styles.inputStyle} />
        </View>
        <Icon
          type={"MaterialCommunityIcons"}
          name={"account-details"}
          style={styles.icon}
        />
        <Icon
          type={"MaterialCommunityIcons"}
          name={"account-details"}
          style={styles.icon2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    top: 4,
    left: 4,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 4,
    bottom: 4,
    borderRadius: 100
  },
  inputStyle: {
    top: 4,
    left: 72,
    width: "70%",
    height: 48,
    color: "#000",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  icon: {
    top: 26,
    left: 29,
    position: "absolute",
    color: "grey",
    fontSize: 40
  },
  icon2: {
    left: 28,
    top: 0,
    color: "grey"
  }
});
