import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants';

import { StackNavigator } from "react-navigation";

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  constructor(props) {
    super(props);
    const exercises = [];
    this.state = { exercises };
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        const headers = {
          'Authorization': token
        };

        axios({
          method: 'GET',
          url: 'https://datafit-api.herokuapp.com/api/mobile/exercises',
          headers: headers
        }).then((response) => {
          if(response["status"] == 200){
            response["data"]["exercises"].map((e, i) => {
              this.setState({
                exercises: this.state.exercises.concat([e])
              })
            });
          } else {
            console.error("Bad request");
          }
        })
        .catch((error) => {
           // Handle returned errors here
        });
      } else {
        // Handle exception
      }
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>CrossFit</Text>
            <Text style={styles.description}>Escolha um exercício abaixo para começar a praticar</Text>
            {this.state.exercises.map((exercise, index) => (
              <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Exercise")}>
                <Image source={require("../../assets/images/air-squat.png")} style={styles.mainPicture} />
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </ScrollView>
        </SafeAreaView>

        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <Image source={require("../../assets/images/home/home-icon.png")} />
          </View>
          <View style={styles.footerCol}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
              <Image source={require("../../assets/images/home/profile-icon.png")} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  mainPicture: {
    width: "100%",
    height: 200,
    top: 20
  },
  description: {
    color: "#868E97",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 23,
    width: 220,
    top: 5
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#E9E9E9",
    fontSize: 25
  },
  contentContainer: {
    padding: 24,
    top: 50
  },
  container: {
    flex: 1,
    backgroundColor: "#2A2E34"
  },
  footer: {
    flexDirection: 'row',
    position: "absolute",
    height: 60,
    left: 0,
    bottom: 0,
    backgroundColor: "#2A2E34",
    elevation: 4,
    shadowColor: "rgba(35, 37, 40, 0.614729)",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  footerCol: {
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent("Login", () => Login);
