import React, { Component } from "react";
import {
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

export default class EditPassword extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  onNextPress() { }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
                <Image source={require("../assets/images/icon.png")} style={styles.backButton} />
              </TouchableHighlight>
              <Text style={styles.title}>Alterar senha</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                secureTextEntry
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
              <Text style={styles.formLabel}>SENHA ATUAL</Text>
            </View>

            <View style={styles.window}>
              <TextInput
                secureTextEntry
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
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

AppRegistry.registerComponent("EditPassword", () => EditPassword);
