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

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      rememberMe: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async onNextPress() { }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
                <Image source={require("../assets/images/icon.png")} style={styles.backButton} />
              </TouchableHighlight>
              <Text style={styles.title}>Completar cadastro</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
              <Text style={styles.formLabel}>NOME COMPLETO</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
              <Text style={styles.formLabel}>E-MAIL</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
              <Text style={styles.formLabel}>DATA DE NASCIMENTO</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.measurementsCol}>
                <TextInput
                  returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
                <Text style={styles.formLabel}>ALTURA (CM)</Text>
              </View>
              <View style={styles.measurementsColSpace}></View>
              <View style={styles.measurementsCol}>
                <TextInput
                  returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
                <Text style={styles.formLabel}>PESO (KG)</Text>
              </View>
            </View>

            <View style={styles.window}>
              <Text style={styles.formLabel}>QUEM VOCÊ É</Text>
              <View style={styles.rowUserType}>
                <Text style={styles.userType}>SOU ALUNO</Text>
                <Text style={styles.userType}>SOU PROFESSOR</Text>
              </View>
            </View>

            <View style={styles.window}>
              <TextInput
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
              <Text style={styles.formLabel}>CRIAR SENHA</Text>
            </View>

            <View style={styles.window}>
              <TextInput
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
  userType: {
    borderColor: 'green',
    color: "#C9CDD0",
    borderColor: "#C9CDD0",
    borderWidth: 1,
    width: "50%",
    borderStyle: 'dotted'
  },
  rowUserType: {
    flexDirection: "row",
    height: 35
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
