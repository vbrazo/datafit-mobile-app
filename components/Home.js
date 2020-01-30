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
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  componentWillUnmount() {
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
            // it should build the list of exercise grid
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
    }).catch(err => reject(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>CrossFit</Text>
          <Text style={styles.description}>Escolha um exercício abaixo para começar a praticar</Text>
          <View>
            <Image source={require("../assets/images/home/home-pic-1.png")} style={styles.mainPicture} />
          </View>
          <View>
            <Image source={require("../assets/images/home/home-pic-1.png")} style={styles.mainPicture} />
          </View>
          <View>
            <Image source={require("../assets/images/home/home-pic-1.png")} style={styles.mainPicture} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <Image source={require("../assets/images/home/home-icon.png")} />
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
  mainPicture: {
    width: "98%",
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
