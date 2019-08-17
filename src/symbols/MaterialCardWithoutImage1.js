import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class MaterialCardWithoutImage1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Hi! nice to meet you too</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-end",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  body: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    color: "rgba(255,255,255,1)",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20
  }
});
