import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  CheckBox,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import axios from 'axios';
import Constants from 'expo-constants';

export default class SignUp extends Component {
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
      password_confirmation: "",
      name: "",
      agree_to_tac: "",
      date_of_birth: "",
      height: "",
      weight: "",
      user_type: ""
    };
  }

  onSuccess = async (token) => {
    AsyncStorage.setItem('token', token);

    this.props.navigation.navigate("Home");
  }

  onNextPress() {
    const { email, password, name, dateOfBirth, height, weight, userType} = this.state;

    const params = {
      user: {
        email: email,
        password: password,
        password_confirmation: password,
        name: name,
        agree_to_tac: true,
        date_of_birth: dateOfBirth,
        height: height,
        weight: weight,
        user_type: userType
      }
    }

    axios.post("https://datafit-api.herokuapp.com/api/users", params).then((response) => {
      if(response["status"] == 200){
        this.onSuccess(response["headers"]["authorization"]);
      } else {
        console.error("Bad request");
      }
    })
    .catch((error) => {
       // Handle returned errors here
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView>
            <View style={styles.container}>
              <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
                <View style={styles.navBar}>
                  <View style={styles.leftContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate("Initial")}>
                      <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
                    </TouchableHighlight>
                  </View>
                  <Text style={styles.title}>
                    Completar cadastro
                  </Text>
                  <View style={styles.rightContainer}>
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

                <View style={styles.window}>
                  <TextInput
                    secureTextEntry
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                  />
                  <Text style={styles.formLabel}>CRIAR SENHA</Text>
                </View>

                <View style={styles.window}>
                  <TextInput
                    secureTextEntry
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                  />
                  <Text style={styles.formLabel}>CONFIRMAR SENHA</Text>
                </View>

                <View style={styles.window}>
                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                      <CheckBox title='Li e concordo com os termos de uso e políticas de privacidade'
                          style={styles.checkbox}
                          value={this.state.rememberMe} />
                    </View>
                    <Text style={styles.titleCheckbox}>
                      Li e concordo com os termos de uso e políticas de privacidade
                    </Text>
                    <View style={styles.rightContainer}>
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onNextPress.bind(this)}>
                  <Text style={styles.buttonText}>Avancar</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  navBar: {
    height: 60,
    marginBottom: 20,
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
    justifyContent: 'flex-end'
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
    textAlignVertical: "center",
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
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'green',
    borderStyle: 'dotted'
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
    marginTop: 0,
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
  titleCheckbox: {
    color: "#C9CDD0",
    fontSize: 15,
    marginTop: 10,
    left: 20,
    lineHeight: 18,
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
  backButton: {
  }
});

AppRegistry.registerComponent("SignUp", () => SignUp);
