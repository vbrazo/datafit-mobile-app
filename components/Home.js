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
      <View style={styles.containerFooter}>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <Image source={require("../assets/images/home/home-icon.png")} />
          </View>
          <View style={styles.footerCol}>
            <Image source={require("../assets/images/home/history-icon.png")} />
          </View>
          <View style={styles.footerCol}>
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
  containerFooter: {
    flex: 1,
    backgroundColor: "#2A2E34"
  },
  footer: {
    flexDirection: 'row',
    position: "absolute",
    height: 60,
    left: 0,
    top: 828,
    backgroundColor: "#2A2E34",
    elevation: 4,
    shadowColor: "rgba(35, 37, 40, 0.614729)",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  footerCol: {
    width: "33%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent("Login", () => Login);
