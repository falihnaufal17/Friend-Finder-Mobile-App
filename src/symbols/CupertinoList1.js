import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default class CupertinoList1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          renderItem={({ item, separators }) => (
            <View style={styles.rect}>
              <Text style={styles.rowText}>List Row</Text>
            </View>
          )}
          data={[{}, {}]}
          style={styles.list1}
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
  list1: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  rect: {
    height: 43,
    flexDirection: "row",
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#CECED2"
  },
  rowText: {
    color: "#212121",
    fontSize: 17
  }
});
