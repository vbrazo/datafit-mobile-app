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

export default class FeedbackDetails extends Component {
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
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <ImageBackground source={require("../../assets/images/feedback-details.png")} style={{width: '100%', height: 627}}>
            
          </ImageBackground>
          <View style={styles.row}>
            <Text style={styles.exerciseTitle}>Dica 02</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.exerciseTip}>Abaixe um pouco mais!</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.exerciseTitle}>Você precisa descer mais um pouco. Dessa forma você terá um maior fortalecimento da parte frontal da perna.</Text>
          </View>
          <View style={styles.navBar}>
            <View style={styles.leftContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("FeedbackResult")}>
                <Text style={styles.backButton}>
                  Anterior
                </Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.title}>
              ...
            </Text>
            <View style={styles.rightContainer}>
              <TouchableOpacity>
                <Text style={styles.nextButton}>
                  Avancar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextButton: {
    color: "#fff",
    fontFamily: "Roboto-Medium",
    fontSize: 18
  },
  backButton: {
    color: "#474E5A",
    fontFamily: "Roboto-Medium",
    fontSize: 18
  },
  row: {
    flexDirection: "row",
    padding: 10
  },
  exerciseTitle: {
    color: "#9DA1A5",
    fontFamily: "Roboto-Medium",
    fontSize: 12.8
  },
  exerciseTip: {
    color: "#fff",
    fontFamily: "Roboto-Medium",
    fontSize: 20
  },
  exerciseResult: {
    color: "#C9CDD0",
    fontFamily: "Roboto-Regular",
    fontSize: 16
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

AppRegistry.registerComponent("FeedbackDetails", () => FeedbackDetails);
