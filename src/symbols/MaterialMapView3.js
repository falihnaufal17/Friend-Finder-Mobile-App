import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default class MaterialMapView3 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <MapView
          customMapStyle={NaN}
          style={styles.MapView1}
          initialRegion={{
            latitude: -7.758633,
            longitude: 110.3781537,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
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
