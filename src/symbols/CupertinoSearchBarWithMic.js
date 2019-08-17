import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "@builderx/icons";

export default class CupertinoSearchBarWithMic extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.inputBox}>
          <Icon
            name={"magnify"}
            type={"MaterialCommunityIcons"}
            style={styles.inputLeftIcon}
          />
          <TextInput
            placeholder={"Search"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            style={styles.inputStyle}
          />
          <TouchableOpacity style={styles.recordButton}>
            <Icon
              name={"ios-mic"}
              type={"Ionicons"}
              style={styles.inputRightIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.rightIconButton}>
          <Text style={styles.rightButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingRight: 0
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#404040",
    flexDirection: "row",
    borderRadius: 20
  },
  inputLeftIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  inputStyle: {
    height: 32,
    flex: 1,
    color: "#FFF",
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 15
  },
  recordButton: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 8,
    borderRadius: 13
  },
  inputRightIcon: {
    alignSelf: "center",
    opacity: 0.7,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#FFF",
    fontSize: 20
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "roboto-regular"
  }
});
