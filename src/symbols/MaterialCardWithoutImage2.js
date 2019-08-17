import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class MaterialCardWithoutImage2 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Hi! nice to meet you!{"\n"}
            {"\n"}dsadsad
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
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
    width: 359,
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    flex: 1,
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left"
  }
});
