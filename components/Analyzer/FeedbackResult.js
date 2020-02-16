import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants';

import { StackNavigator } from "react-navigation";

export default class FeedbackResult extends Component {
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
          <View style={styles.backgroundRed}>
            <View>
              <Text style={styles.regularText}>Hummm...</Text>
            </View>
            <View>
              <Text style={{fontSize: 149, color: "#fff", fontFamily: "Roboto-Medium"}}>5</Text>
            </View>
            <View>
              <Text style={{fontSize: 18, color: "#fff", fontFamily: "Roboto-Medium"}}>Pontos que podemos melhorar!</Text>
            </View>
            <View>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("FeedbackDetails")}>
                <Image source={require("../../assets/images/next-button.png")} />
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regularText: {
    color: "#fff",
    fontFamily: "Roboto-Medium",
    fontSize: 18
  },
  backgroundRed: {
    backgroundColor: "#D65551",
    height: 600
  },
  row: {
    flexDirection: "row",
    padding: 10
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: "#2A2E34",
    width: "100%",
    height: "100%",
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

AppRegistry.registerComponent("FeedbackResult", () => FeedbackResult);
