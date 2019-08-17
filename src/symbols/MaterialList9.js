import React, { Component } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialList9 extends Component {
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
                <Text style={styles.rowPrimaryText}>Two-line Item</Text>
                <Text numberOfLines={1} style={styles.rowSecondaryText}>
                  Secondary text
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
    height: 72,
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
    height: 72,
    position: "absolute",
    right: 0,
    justifyContent: "center",
    paddingRight: 40,
    borderColor: "#BDBDBD",
    borderBottomWidth: 0.5
  },
  rowPrimaryText: {
    color: "#212121",
    paddingBottom: 8,
    fontSize: 16
  },
  rowSecondaryText: {
    color: "#9E9E9E",
    fontSize: 13
  },
  iconStyle: {
    fontSize: 24,
    color: "#CCCCCC",
    position: "absolute",
    right: 16
  }
});
