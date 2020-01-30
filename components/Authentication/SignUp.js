import React, { Component } from "react";
import {
  AsyncStorage,
  AppRegistry,
  CheckBox,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { StackNavigator } from "react-navigation";
import axios from 'axios';

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
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Login")}>
                <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
              </TouchableHighlight>
              <Text style={styles.title}>Completar cadastro</Text>
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
              <Text style={styles.formLabel}>QUEM VOCÊ É</Text>
              <View style={styles.rowUserType}>
                <View style={styles.userType1}>
                  <Text style={styles.userTypeText}>SOU ALUNO</Text>
                </View>
                <View style={styles.userType2}>
                  <Text style={styles.userTypeText}>SOU PROFESSOR</Text>
                </View>
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
              <CheckBox title='Li e concordo com os termos de uso e políticas de privacidade'
                        style={styles.checkbox}
                        value={this.state.rememberMe} />
              <Text style={styles.formLabel}>Li e concordo com os termos de uso e políticas de privacidade</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onNextPress.bind(this)}>
              <Text style={styles.buttonText}>Avancar</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userTypeText:{
    color: "#C9CDD0",
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center"
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
  backButton: {
  }
});

AppRegistry.registerComponent("SignUp", () => SignUp);
