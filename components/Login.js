import React, { Component } from "react";
import {
  AppRegistry,
  AsyncStorage,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputText}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <Text style={styles.formEmailText}>E-MAIL</Text>
            </View>
            <View style={styles.window}>
              <View style={styles.forgotPasswordForm}>
                <TextInput
                  returnKeyType="go"
                  secureTextEntry
                  ref={input => (this.passwordInput = input)}
                  style={styles.inputText}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })} />
                <Image source={require("../assets/images/eye-no.png")} style={styles.ImageStyle} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.formPasswordText}>SENHA</Text>
                <Text style={styles.formForgotPasswordText}>ESQUECEU SUA SENHA?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress.bind(this)}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signUpText}
                onPress={() => this.props.navigation.navigate("SignUp")}
                title="Sign up">
            CADASTRE-SE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
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
  button: {
    paddingVertical: 15
  },
  signUpText: {
    textAlign: "center",
    color: "#C9CDD0",
    paddingBottom: 20,
    fontFamily: "Roboto-Regular",
    fontSize: 12.8
  },
  formEmailText: {
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    fontFamily: "Roboto-Regular"
  },
  formPasswordText: {
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    paddingBottom: 40,
    fontFamily: "Roboto-Regular"
  },
  formForgotPasswordText: {
    position: 'absolute',
    right: 0,
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    paddingBottom: 40,
    fontFamily: "Roboto-Regular"
  },
  inputText: {
    height: 40,
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    borderBottomWidth: 1.0,
    width: "100%",
    borderBottomColor: "#C9CDD0"
  },
  window: {
    marginBottom: 15
  },
  ImageStyle: {
    bottom: 5,
    padding: 10,
    margin: 5,
    height: 25,
    right: 30,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  forgotPasswordForm: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent("Login", () => Login);
