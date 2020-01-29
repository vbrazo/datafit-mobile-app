import React, { Component } from "react";
import {
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
      date_of_birth: "",
      height: "",
      weight: "",
      user_type: ""
    };
  }

  onSubmitPress() {
    const { email, password, name, dateOfBirth, height, weight, userType} = this.state;

    const params = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        date_of_birth: dateOfBirth,
        height: height,
        weight: weight,
        user_type: userType
      })
    }

    fetch('https://datafit-api.herokuapp.com/api/mobile/users/1/change_profile', params).then((response) => response.json())
    .then((response) => {
      if (response["errors"][0]["status"] == "200"){
        this.props.navigation.navigate("Home");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
            <View style={styles.window}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}>
                <Image source={require("../assets/images/icon.png")} style={styles.backButton} />
              </TouchableHighlight>
              <Text style={styles.title}>Editar perfil</Text>
              <TouchableOpacity onPress={this.onSubmitPress.bind(this)}>
                <Image source={require("../assets/images/icon-submit.png")} style={styles.submitButton} />
              </TouchableOpacity>
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
                value={this.state.name}
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
                <View style={styles.userType1}><Text style={styles.userTypeText}>SOU ALUNO</Text></View>
                <View style={styles.userType2}><Text style={styles.userTypeText}>SOU PROFESSOR</Text></View>
              </View>
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
