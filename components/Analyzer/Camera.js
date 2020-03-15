import React, {Component} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {StackNavigator} from 'react-navigation';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      recording: '',
      processing: '',
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };

  async startRecording() {
    this.setState({recording: true});
    // default to mp4 for android as codec is not set
    const {uri, codec = 'mp4'} = await this.camera.recordAsync();
    this.setState({recording: false, processing: true});
    const type = `video/${codec}`;

    const data = new FormData();
    data.append('video', {
      name: 'mobile-video-upload',
      type,
      uri,
    });

    try {
      await fetch('https://datafit-api.herokuapp.com/api/mobile/uploads', {
        method: 'post',
        body: data,
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({processing: false});
  }

  stopRecording() {
    this.camera.stopRecording();
  }

  render() {
    let button = (
      <TouchableOpacity
        onPress={this.startRecording.bind(this)}
        style={styles.capture}>
        <View style={{fontSize: 14, height: 120, top: 18}}>
          <Image source={require('../../assets/images/record-button.png')} />
        </View>
      </TouchableOpacity>
    );

    if (this.state.recording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.capture}>
          <View style={{fontSize: 14, height: 120, top: 18}}>
            <Image source={require('../../assets/images/record-button.png')} />
          </View>
        </TouchableOpacity>
      );
    }

    if (this.state.processing) {
      this.props.navigation.navigate('FeedbackResult', { recent_upload: true });
    }

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#2A2E34',
          }}>
          {button}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#2A2E34',
  },
  container: {
    width: '100%',
    height: '100%',
  },
});

AppRegistry.registerComponent('Camera', () => Camera);
