import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default class MaterialList131 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          horizontal={false}
          renderItem={({ item, separators }) => (
            <View style={styles.rect4}>
              <Text style={styles.text3}>List Item</Text>
            </View>
          )}
          data={[{}, {}]}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  list: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  rect4: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    padding: 16
  },
  text3: {
    color: "#121212",
    fontSize: 14
  }
});
