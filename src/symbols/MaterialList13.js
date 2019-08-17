import React, { Component } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialList13 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          renderItem={({ item, separators }) => (
            <View style={styles.rect}>
              <Image
                source={require("../assets/images/cardImage.png")}
                style={styles.avatarImageStyle}
              />
              <View style={styles.contentColor}>
                <Text style={styles.rowTitle}>Two-line Item</Text>
                <Text style={styles.rowSubTitle}>
                  BuilderX is a screen design tool which codes React Native for
                  you.
                </Text>
              </View>
              <Icon
                name={"message"}
                type={"MaterialCommunityIcons"}
                style={styles.iconStyle}
              />
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
  rect: {
    height: 88,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16
  },
  avatarImageStyle: {
    width: 40,
    height: 40,
    backgroundColor: "#CCCCCC",
    borderRadius: 20
  },
  contentColor: {
    left: 72,
    height: 88,
    position: "absolute",
    right: 0,
    justifyContent: "center",
    paddingRight: 40,
    borderColor: "#BDBDBD",
    borderBottomWidth: 0.5
  },
  rowTitle: {
    color: "#212121",
    paddingBottom: 8,
    fontSize: 16
  },
  rowSubTitle: {
    color: "#9E9E9E",
    fontSize: 13,
    lineHeight: 16
  },
  iconStyle: {
    fontSize: 24,
    color: "#CCCCCC",
    position: "absolute",
    right: 16
  }
});
