import React, { Component } from "react";
import {
  AppRegistry,
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
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onSuccess.bind(this);
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  onSuccess = async (token) => {
    RNSecureStorage.set("token", token, {accessible: ACCESSIBLE.WHEN_UNLOCKED}).then((res) => {
      console.log(res);
      this.props.navigation.navigate("Home");
    }, (err) => {
      console.log(err);
    });
  }

  onLoginPress() {
    const { email, password } = this.state;

    const params = {
      user: {
        email: email,
        password: password
      }
    }

    axios.post("https://datafit-api.herokuapp.com/api/users/sign_in", params).then((response) => {
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
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require("../../assets/images/logo.png")} />
          </View>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <Text style={styles.emailLabel}>E-MAIL</Text>
            </View>
            <View style={styles.window}>
              <View style={styles.forgotPasswordContainer}>
                <TextInput
                  returnKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })} />
                <Image source={require("../../assets/images/eye-no.png")} style={styles.passwordHiddenIcon} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.passwordLabel}>SENHA</Text>
                <Text style={styles.forgotPasswordLabel}>ESQUECEU SUA SENHA?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress.bind(this)}>
              <Text style={styles.signInButton}>Entrar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.buttonLinkContainer}>
          <Text style={styles.signUpLink}
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
  window: {
    marginBottom: 15
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
  signInButton: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#2A2E34",
    fontFamily: "Roboto-Regular"
  },
  buttonContainer: {
    backgroundColor: "#FFC13C",
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonLinkContainer: {
    paddingVertical: 15
  },
  signUpLink: {
    textAlign: "center",
    color: "#C9CDD0",
    paddingBottom: 20,
    fontFamily: "Roboto-Regular",
    fontSize: 12.8
  },
  emailLabel: {
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
  passwordLabel: {
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    paddingBottom: 40,
    fontFamily: "Roboto-Regular"
  },
  forgotPasswordLabel: {
    position: 'absolute',
    right: 0,
    color: "#C9CDD0",
    fontSize: 12.8,
    marginTop: 10,
    paddingBottom: 40,
    fontFamily: "Roboto-Regular"
  },
  passwordHiddenIcon: {
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
  forgotPasswordContainer: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent("Login", () => Login);
