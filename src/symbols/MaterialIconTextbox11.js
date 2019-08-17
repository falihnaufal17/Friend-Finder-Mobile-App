import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialIconTextbox11 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          name={"eye"}
          type={"MaterialCommunityIcons"}
          style={styles.iconStyle}
        />
        <TextInput placeholder={"Password"} style={styles.inputStyle} secureTextEntry={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
