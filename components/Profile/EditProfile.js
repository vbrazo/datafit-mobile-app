import React, { Component } from "react";
import {
  Alert,
  AsyncStorage,
  AppRegistry,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import axios from 'axios';
import { StackNavigator } from "react-navigation";

export default class EditProfile extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      dateOfBirth: "",
      height: "",
      weight: "",
      userType: ""
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        const headers = {
          'Authorization': token
        };

        axios({
          method: 'GET',
          url: 'https://datafit-api.herokuapp.com/api/mobile/users/by_signature',
          headers: headers
        }).then((response) => {
          if(response["status"] == 200){
            this.setState({
              email: response["data"]["email"],
              name: response["data"]["name"],
              dateOfBirth: response["data"]["date_of_birth"],
              height: response["data"]["height"],
              weight: response["data"]["weight"],
              userType: response["data"]["user_type"]
            })
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

  onSubmitPress = async () => {
    const { email, password, name, dateOfBirth, height, weight, userType} = this.state;

    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        const headers = {
          'Authorization': token
        };

        const params = {
          email: email,
          password: password,
          name: name,
          date_of_birth: dateOfBirth,
          height: height,
          weight: weight,
          user_type: userType
        }

        axios({
          method: 'PUT',
          url: 'https://datafit-api.herokuapp.com/api/mobile/users/change_profile',
          params: params,
          headers: headers
        }).then((response) => {
          if(response["status"] == 200){
            Alert.alert(
              'Perfil atualizado',
              '',
              [
                {
                  text: 'Voltar',
                  onPress: () => this.props.navigation.navigate("Profile"),
                  style: 'cancel',
                }
              ]
            );
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
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.navBar}>
              <View style={styles.leftContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
                  <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
                </TouchableHighlight>
              </View>
              <Text style={styles.title}>
                Editar perfil
              </Text>
              <View style={styles.rightContainer}>
                <TouchableOpacity onPress={this.onSubmitPress.bind(this)}>
                  <Image source={require("../../assets/images/icon-submit.png")} style={styles.submitButton} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
              <Text style={styles.formLabel}>NOME COMPLETO</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <Text style={styles.formLabel}>E-MAIL</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={this.state.dateOfBirth}
                onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
              />
              <Text style={styles.formLabel}>DATA DE NASCIMENTO</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.measurementsCol}>
                <TextInput
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  value={this.state.height}
                  onChangeText={height => this.setState({ height })}
                />
                <Text style={styles.formLabel}>ALTURA (CM)</Text>
              </View>
              <View style={styles.measurementsColSpace}></View>
              <View style={styles.measurementsCol}>
                <TextInput
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  value={this.state.weight}
                  onChangeText={weight => this.setState({ weight })}
                />
                <Text style={styles.formLabel}>PESO (KG)</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  userTypeText:{
    color: "#C9CDD0",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    top: 7
  },
  userType1: {
    borderColor: "#C9CDD0",
    borderWidth: 1,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    width: "50%"
  },
  userType2: {
    borderColor: "#C9CDD0",
    borderWidth: 1,
    borderBottomEndRadius: 7,
    borderTopRightRadius: 7,
    width: "50%"
  },
  rowUserType: {
    flexDirection: "row",
    height: 35,
    marginTop: 10
  },
  row: {
    flexDirection: "row",
    height: 100
  },
  window: {
    marginBottom: 15
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center"
  },
  measurementsCol: {
    width: "45%"
  },
  measurementsColSpace: {
    width:"10%"
  },
  container: {
    flex: 1,
    backgroundColor: "#2A2E34"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "#FFC13C",
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#2A2E34",
    fontFamily: "Roboto-Regular"
  },
  formLabel: {
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    fontFamily: "Roboto-Regular"
  },
  input: {
    height: 40,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    borderBottomWidth: 1.0,
    width: "100%",
    borderBottomColor: "#C9CDD0"
  },
  submitButton: {

  }
});

AppRegistry.registerComponent("EditProfile", () => EditProfile);
