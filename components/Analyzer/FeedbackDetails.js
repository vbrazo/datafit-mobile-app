import React, {Component} from 'react';
import {
  AsyncStorage,
  AppRegistry,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  Item,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

import {StackNavigator} from 'react-navigation';

export default class FeedbackDetails extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };

  constructor(props) {
    super(props);
    const tips = [];
    this.state = {tips};
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
                response.data.uploads.tips.map((e, i) => {
                  this.setState({
                    tips: this.state.tips.concat([e]),
                  });
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
            <ImageBackground
              source={require('../../assets/images/feedback-details.png')}
              style={{width: '100%', height: 627}}
            />
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                width: `${100 * (this.state.tips.length + 1.1)}%`,
              }}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled>
              {this.state.tips.map((tip, index) => (
                <View style={styles.tipRow}>
                  <View style={styles.row}>
                    <Text style={styles.exerciseTitle}>Tip 0{index + 1}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.exerciseTip}>{tip.title}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.exerciseResult}>{tip.description}</Text>
                  </View>

                  <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                      <TouchableHighlight
                        onPress={() =>
                          this.props.navigation.navigate('FeedbackResult', {
                            id: this.state.id,
                          })
                        }>
                        <Text style={styles.backButton}>Anterior</Text>
                      </TouchableHighlight>
                    </View>
                    <Text style={styles.title}>...</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tipRow: {
    width: Dimensions.get('window').width,
    padding: 10,
  },
  nextButton: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  backButton: {
    color: '#474E5A',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  exerciseTitle: {
    color: '#9DA1A5',
    fontFamily: 'Roboto-Medium',
    fontSize: 12.8,
  },
  exerciseTip: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  exerciseResult: {
    color: '#C9CDD0',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 10,
  },
  safeAreaView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#2A2E34',
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

AppRegistry.registerComponent('FeedbackDetails', () => FeedbackDetails);
