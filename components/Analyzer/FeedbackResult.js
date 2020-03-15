import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

import {StackNavigator} from 'react-navigation';

export default class FeedbackResult extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };

  constructor(props) {
    super(props);
    const feedback = [];
    const tips = [];
    this.state = {feedback, tips};
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;
    const id = params ? params.id : null;

    this.setState({
      id: id,
    });

    AsyncStorage.getItem('token')
      .then(token => {
        if (token !== null) {
          const headers = {
            Authorization: token,
          };

          axios({
            method: 'GET',
            url:
              'https://datafit-api.herokuapp.com/api/mobile/uploads/' +
              this.state.id +
              '/feedback',
            headers: headers,
          })
            .then(response => {
              if (response.status == 200) {
                this.setState({
                  number_of_problems: response.data.uploads.number_of_problems,
                  tips: response.data.uploads.tips,
                });
              } else {
                console.error('Bad request');
              }
            })
            .catch(error => {
              // Handle returned errors here
            });
        } else {
          // Handle exception
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView>
            <View style={styles.backgroundRed}>
              <View style={styles.firstTitle}>
                <Text style={styles.regularText}>Hummm...</Text>
              </View>
              <View style={styles.subtTitle}>
                <Text
                  style={{
                    fontSize: 149,
                    color: '#fff',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  {this.state.tips.length}
                </Text>
              </View>
              <View style={styles.title}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Pontos que podemos melhorar!
                </Text>
              </View>
              <View style={styles.nextButtonContainer}>
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate('FeedbackDetails', {
                      id: this.state.id,
                      tips: this.state.tips,
                    })
                  }>
                  <Image
                    source={require('../../assets/images/next-button.png')}
                  />
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstTitle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 200,
  },
  subtTitle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  nextButtonContainer: {
    top: 75,
    alignItems: 'center',
  },
  regularText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  backgroundRed: {
    backgroundColor: '#D65551',
    height: 600,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2E34',
    width: '100%',
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    height: 60,
    left: 0,
    bottom: 0,
    backgroundColor: '#2A2E34',
    elevation: 4,
    shadowColor: 'rgba(35, 37, 40, 0.614729)',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  footerCol: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('FeedbackResult', () => FeedbackResult);
