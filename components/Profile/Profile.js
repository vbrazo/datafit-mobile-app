import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
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
          <View style={styles.navBar}>
            <Text style={styles.title}>
              Perfil
            </Text>
          </View>

          <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("EditProfile")}>
              <View style={{backgroundColor:"#303641",marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', height: 56}}>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start',flex: 1}}>
                  <Text style={styles.formLabel}>
                    Editar Perfil
                  </Text>
                </View>
                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center', paddingRight: 20}}>
                  <Image source={require("../../assets/images/icon-profile.png")} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("EditPassword")}>
              <View style={{backgroundColor:"#303641",marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', height: 56}}>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start',flex: 1}}>
                  <Text style={styles.formLabel}>
                    Alterar senha
                  </Text>
                </View>
                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center', paddingRight: 20}}>
                  <Image source={require("../../assets/images/icon-profile.png")} />
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.window}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Initial")}>
              <View style={{backgroundColor:"#303641",marginTop: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center', height: 56}}>
                <View style={{flexDirection: 'row',justifyContent: 'flex-start',flex: 1}}>
                  <Text style={styles.formLabel}>
                    Sair
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.window}>
            <Text style={styles.versionText}>version 1.0.0</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerCol}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
                <Image source={require("../../assets/images/icon-home.png")} />
              </TouchableHighlight>
            </View>
            <View style={styles.footerCol}>
              <Image source={require("../../assets/images/icon-profile-active.png")} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    padding: 20,
    marginTop: 50,
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
    marginBottom: 15,
    width: "100%"
  },
  firstWindow: {
    marginTop: 55
  },
  title: {
    fontFamily: "Roboto-Medium",
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
    height: 56,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    paddingLeft: 20,
    paddingTop: 18
  },
  layer: {
    color: "#C9CDD0",
    backgroundColor: "#303641"
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
  icons: {
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

AppRegistry.registerComponent("Profile", () => Profile);
