import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

// Analyzer Components
import Camera from "./components/Analyzer/Camera";
import FeedbackDetails from "./components/Analyzer/FeedbackDetails";
import FeedbackResult from "./components/Analyzer/FeedbackResult";

// Authentication Components
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";

// Exercises Components
import Exercise from "./components/Exercise/Exercise";
import Home from "./components/Exercise/Home";

// Profile Components
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
        <Home navigation={this.props.navigation} />
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
  },
  Exercise: {
    screen: Exercise,
    navigationOptions: {
      title: "Exercise"
    }
  },
  FeedbackDetails: {
    screen: FeedbackDetails,
    navigationOptions: {
      title: "FeedbackDetails"
    }
  },
  FeedbackResult: {
    screen: FeedbackResult,
    navigationOptions: {
      title: "FeedbackResult"
    }
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      title: "Camera"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
