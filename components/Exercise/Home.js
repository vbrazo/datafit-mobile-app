import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import moment from 'moment';
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
            response["data"].map((e, i) => {
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
          </View>

          <View style={styles.contentContainer2}>
            {this.state.exercises.map((exercise, index) => (
              <View>
                {exercise["uploads"]["uploads"] == 0 ? (
                  <View style={styles.contentContainer3}>
                    <TouchableHighlight onPress={() =>
                      this.props.navigation.navigate("Exercise", {
                        id: exercise["exercise"].id,
                        name: exercise["exercise"].name
                      }
                    )}>
                      <ImageBackground source={require("../../assets/images/deadlift-home.png")} style={styles.mainPicture}>
                        <View style={styles.row}>
                          <View style={styles.item1}>
                            <Text style={styles.exerciseName}>{exercise["exercise"].name}</Text>
                            <View style={styles.exerciseDescriptionContainer}>
                              <Text style={styles.exerciseDescription}>Você ainda não praticou</Text>
                            </View>
                          </View>
                        </View>
                      </ImageBackground>
                    </TouchableHighlight>
                  </View>
                ) : (
                  <TouchableHighlight onPress={() =>
                    this.props.navigation.navigate("Exercise", {
                      id: exercise["exercise"].id,
                      name: exercise["exercise"].name,
                      image: "../../assets/images/deadlift-home.png"
                    }
                  )}>
                    <ImageBackground source={require("../../assets/images/deadlift-home.png")} style={styles.mainPicture}>
                      <View style={styles.row}>
                        <View style={styles.item1}>
                          <Text style={styles.exerciseName}>{exercise["exercise"].name}</Text>
                          <View>
                            <View style={styles.pastExercisesContainer}>
                              <View style={styles.iconContainer}>
                                <Image source={require("../../assets/images/clock-icon.png")} style={styles.timeIcon} />
                              </View>

                              {Array.from({length: exercise["uploads"]["uploads"] - exercise["uploads"]["failed_uploads"]}, (item, index) =>
                                <View style={styles.iconContainer}>
                                  <Image source={require("../../assets/images/oval-green-icon.png")} style={styles.exerciseIcon} />
                                </View>
                              )}

                              {Array.from({length: exercise["uploads"]["failed_uploads"]}, (item, index) =>
                                <View style={styles.iconContainer}>
                                  <Image source={require("../../assets/images/oval-red-icon.png")} style={styles.exerciseIcon} />
                                </View>
                              )}

                            </View>
                          </View>
                        </View>
                        <View style={styles.item2}>
                          <Text style={styles.lastDateLabel}>Última vez</Text>
                          <Text style={styles.lastDate}>{moment(exercise["exercise"].created_at).format('DD/MM/YYYY')}</Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableHighlight>
                )}
                </View>
            ))}
          </View>
          <View style={styles.separator}>

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
  separator: {
    height: 120
  },
  iconContainer: {
    width: "10%",
    bottom: 4
  },
  exerciseIcon: {
    height: 12,
    width: 12,
    top: 2,
    left: 3
  },
  timeIcon: {
    height: 16,
    width: 16
  },
  exerciseName: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    bottom: 12,
    color: "#fff"
  },
  exerciseDescription: {
    fontFamily: "Roboto-Regular",
    fontSize: 12.8,
    color: "#6E757D"
  },
  exerciseDescriptionContainer: {
    height: 25
  },
  lastDateLabel: {
    fontFamily: "Roboto-Regular",
    fontSize: 12.8,
    bottom: 2,
    color: "#6E757D"
  },
  lastDate: {
    fontFamily: "Roboto-Regular",
    fontSize: 12.8,
    color: "#fff"
  },
  item1: {
    left: 35,
    width: "50%",
    position: 'absolute',
    bottom: 15
  },
  item2: {
    width: "100%",
    position: 'absolute',
    bottom: 21,
    right: 35,
    alignItems: 'flex-end',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: 200,
    width: "100%"
  },
  pastExercisesContainer:{
    flex: 1,
    flexDirection: 'row'
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  mainPicture: {
    top: 20,
    height: 230
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
  contentContainer2: {
    padding: 4,
    top: 40
  },
  contentContainer3: {
    top: 10
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

AppRegistry.registerComponent("Home", () => Home);
