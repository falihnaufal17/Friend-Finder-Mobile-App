import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";

export default class MaterialHeader13 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center>
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              Person
            </Text>
          </View>
        </Center>
        <Center vertical>
          <Image
            source={require("../assets/images/IMG-20190402-WA0008.jpg")}
            resizeMode={"cover"}
            style={styles.image}
          />
        </Center>
        <Center vertical>
          <Icon
            type={"MaterialCommunityIcons"}
            name={"arrow-left"}
            style={styles.icon}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  textWrapper: {
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  },
  image: {
    left: 70,
    width: 49,
    height: 46,
    position: "absolute",
    borderRadius: 100,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2
  },
  icon: {
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  }
});
