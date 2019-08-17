import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialHeader14 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton} />
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Friend Finder
          </Text>
        </View>
        <TouchableOpacity style={styles.rightIconButton} />
        <Icon type={"Ionicons"} name={"ios-menu"} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  leftIconButton: {
    top: 16,
    left: 31,
    position: "absolute",
    padding: 11
  },
  textWrapper: {
    left: 72,
    position: "absolute",
    bottom: 19
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  },
  rightIconButton: {
    top: 5,
    position: "absolute",
    alignItems: "center",
    right: 5,
    padding: 11
  },
  icon: {
    top: 13,
    left: 19.75,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  }
});
