import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Profile extends Component {
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
        <View behavior="padding" style={styles.container}>
          <View style={styles.firstWindow}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
              <Image source={require("../../assets/images/icon.png")} style={styles.backButton} />
            </TouchableHighlight>
            <Text style={styles.title}>Perfil</Text>
          </View>

          <View style={styles.window}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("EditProfile")}>
              <Text style={styles.formLabel}>Editar Perfil</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.window}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("EditPassword")}>
              <Text style={styles.formLabel}>Alterar senha</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.window}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Initial")}>
              <Text style={styles.formLabel}>Sair</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.window}>
            <Text style={styles.versionText}>version 1.0.0</Text>
          </View>
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
  firstWindow: {
    marginTop: 55
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center"
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
  versionText: {
    color: "#C9CDD0",
    textAlign: "center"
  },
  formLabel: {
    color: "#C9CDD0",
    backgroundColor: "#303641",
    height: 40,
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
  }
});

AppRegistry.registerComponent("Profile", () => Profile);
