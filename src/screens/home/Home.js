import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView3 from "../../symbols/MaterialMapView3";
import { Center } from "@builderx/utils";
import CupertinoSearchBarBasic4 from "../../symbols/CupertinoSearchBarBasic4";
import MaterialButtonShare7 from "../../symbols/MaterialButtonShare7";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.root}>
        <MaterialMapView3 style={styles.materialMapView3} />
        <Center horizontal>
          <CupertinoSearchBarBasic4 style={styles.cupertinoSearchBarBasic4} />
        </Center>
        <MaterialButtonShare7 style={styles.materialButtonShare7} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  materialMapView3: {
    top: 0,
    left: 0,
    width: 360,
    height: 640,
    position: "absolute"
  },
  cupertinoSearchBarBasic4: {
    top: 25.3,
    width: 330.57,
    height: 60,
    position: "absolute",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.01
  },
  materialButtonShare7: {
    top: 557.15,
    left: 283.52,
    width: 56,
    height: 56,
    position: "absolute"
  }
});
