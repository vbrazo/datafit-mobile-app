import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants';

import { StackNavigator } from "react-navigation";

export default class Exercise extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  constructor(props) {
    super(props);
    const uploads = [];
    this.state = { uploads };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    const name = params ? params.name : null;
    const image = params ? params.image : null;

    this.setState({
      name: name,
      image: image
    })

    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        const headers = {
          'Authorization': token
        };

        axios({
          method: 'GET',
          url: 'https://datafit-api.herokuapp.com/api/mobile/exercises/'+id+'/uploads',
          headers: headers
        }).then((response) => {
          if(response["status"] == 200){
            response["data"].map((e, i) => {
              this.setState({
                uploads: this.state.uploads.concat([e])
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
          <ImageBackground source={require("../../assets/images/air-squat.png")} style={{width: '100%', height: 627}}>
            <View style={styles.navBar}>
              <View style={styles.leftContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
                  <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
                </TouchableHighlight>
                <View style={styles.contentLeftContainer}>
                  <Text style={styles.title}>{this.state.name}</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.contentContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Camera")}>
                  <Image source={require("../../assets/images/go.png")} />
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
          {this.state.uploads.map((upload, index) => (
            <View style={styles.row}>
              <View style={styles.measurementsColIcon}>
              {Object.keys(upload["uploads"]["number_of_problems"]).length == 0 ? (
                <Image source={require("../../assets/images/oval-green-icon.png")} style={styles.ovalIcon} />
              ) : (
                <Image source={require("../../assets/images/oval-red-icon.png")} style={styles.ovalIcon} />
              )}
              </View>
              <TouchableHighlight onPress={() => (Object.keys(upload["uploads"]["number_of_problems"]).length !== 0) ? (this.props.navigation.navigate("FeedbackResult", {id: upload["uploads"]["id"]})) : null}>
              <View style={{flexDirection: "row"}}>
                <View style={styles.measurementsCol}>
                  <Text style={styles.exerciseTitle}>{this.state.name}</Text>
                  <Text style={styles.exerciseResult}>{Object.keys(upload["uploads"]["number_of_problems"]).length == 0 ? 'Perfect!' : Object.keys(upload["uploads"]["number_of_problems"]).length + ' pontos para melhorar' }</Text>
                </View>
                <View style={{alignItems: "flex-end", width: "40%"}}>
                  <Text style={styles.exerciseResultDate}>{upload["uploads"]["created_at"]}</Text>
                </View>
              </View>
              </TouchableHighlight>
            </View>
          ))}
        </ScrollView>
        </SafeAreaView>
        <View style={styles.footer}>
          <View style={styles.footerCol}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
              <Image source={require("../../assets/images/icon-home.png")} />
            </TouchableHighlight>
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
  ovalIcon: {
    height: 24,
    width: 24
  },
  row: {
    flexDirection: "row",
    height: 100,
    padding: 15,
    left: 10
  },
  measurementsColIcon: {
    width: "10%"
  },
  measurementsCol: {
    width: "50%"
  },
  exerciseTitle: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  exerciseResult: {
    color: "#6E757D",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    top: 10
  },
  exerciseResultDate: {
    color: "#9DA1A5",
    fontFamily: "Roboto-Regular",
    fontSize: 12.8,
    top: 3
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 20
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  title: {
    color: "#868E97",
    fontFamily: "Roboto-Medium",
    fontSize: 25
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
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
    top: 445,
    right: 20,
    alignItems: "flex-end"
  },
  contentLeftContainer: {
    top: 490,
    right: 12
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

AppRegistry.registerComponent("Exercise", () => Exercise);
