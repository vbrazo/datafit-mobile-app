import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";

import EditPassword from "./components/Profile/EditPassword";
import EditProfile from "./components/Profile/EditProfile";
import Profile from "./components/Profile/Profile";

import { StackNavigator } from "react-navigation";

class Initial extends Component<{}> {
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
  Initial: {
    screen: Initial,
    navigationOptions: {
      title: "Initial"
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
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
