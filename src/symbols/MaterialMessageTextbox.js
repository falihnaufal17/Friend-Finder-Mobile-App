import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default class MaterialMessageTextbox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text
          style={[
            styles.label,
            {
              color: this.props.error
                ? "red"
                : this.props.success
                ? "green"
                : "rgba(0,0,0,0.6)"
            }
          ]}
        >
          Label
        </Text>
        <TextInput
          placeholder={"Input"}
          style={[
            styles.inputStyle,
            {
              borderBottomColor: this.props.error
                ? "red"
                : this.props.success
                ? "green"
                : "#D9D5DC"
            }
          ]}
        />
        {this.props.error ? (
          <Text
            style={[
              styles.helper1,
              {
                color: this.props.error ? "red" : "transparent"
              }
            ]}
          >
            Error message
          </Text>
        ) : null}
        {this.props.success ? (
          <Text
            style={[
              styles.helper2,
              {
                color: this.props.success ? "green" : "transparent"
              }
            ]}
          >
            Success message
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  label: {
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  inputStyle: {
    width: "100%",
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  helper1: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  helper2: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});
