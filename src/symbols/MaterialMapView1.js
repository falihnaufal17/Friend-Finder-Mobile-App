import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { MapView } from "expo";

export default class MaterialMapView1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <MapView customMapStyle={NaN} style={styles.MapView1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});
