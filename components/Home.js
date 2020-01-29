import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View><Text>my text</Text></View>
        <View style={styles.footer}>
          <View style={styles.measurementsCol}>
            <Image source={require("../assets/images/home/home-icon.png")} />
          </View>
          <View style={styles.measurementsCol}>
            <Image source={require("../assets/images/home/history-icon.png")} />
          </View>
          <View style={styles.measurementsCol}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
              <Image source={require("../assets/images/home/profile-icon.png")} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#2A2E34",
    height: 50,
    flexDirection: "row",
    height: 100
  },
  measurementsCol: {
    width: "33%"
  }
});

AppRegistry.registerComponent("Login", () => Login);
