import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View
} from "react-native";

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  render() {
    return (
      <View style={styles.wrapper}></View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#2A2E34"
  }
});

AppRegistry.registerComponent("Camera", () => Camera);
