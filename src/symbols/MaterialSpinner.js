import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default class MaterialSpinner extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ActivityIndicator
          color={"rgba(230, 230, 230,1)"}
          strokeOpacity={1}
          style={styles.activityIndicator1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  activityIndicator1: {
    width: 22,
    height: 22,
    position: "absolute",
    top: 0,
    left: 0
  }
});
