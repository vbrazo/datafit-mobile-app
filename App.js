import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import EditPassword from "./components/EditPassword";
import EditProfile from "./components/EditProfile";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { StackNavigator } from "react-navigation";

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "SignUp"
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: "EditProfile"
    }
  },
  EditPassword: {
    screen: EditPassword,
    navigationOptions: {
      title: "EditPassword"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
