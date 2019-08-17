import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class MaterialCardWithoutImage extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Hi! Nice to meet you bray</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-start",
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
    height: 44,
    alignSelf: "stretch",
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20
  }
});
