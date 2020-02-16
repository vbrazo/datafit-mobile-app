import React, { Component } from "react";
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RNCamera } from 'react-native-camera';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      recording: "",
      processing: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
    this.setState({ recording: false, processing: true });
    const type = `video/${codec}`;

    const data = new FormData();
    data.append("video", {
      name: "mobile-video-upload",
      type,
      uri
    });

    try {
      await fetch('https://datafit-api.herokuapp.com/api/mobile/uploads', {
        method: "post",
        body: data
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({ processing: false });
  }

  stopRecording() {
    this.camera.stopRecording();
  }

  render() {
      let button = (
        <TouchableOpacity
          onPress={this.startRecording.bind(this)}
          style={styles.capture}
        >
          <Text style={{ fontSize: 14 }}> RECORD </Text>
        </TouchableOpacity>
      );

      if (this.state.recording) {
        button = (
          <TouchableOpacity
            onPress={this.stopRecording.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> STOP </Text>
          </TouchableOpacity>
        );
      }

      if (this.state.processing) {
        button = (
          <View style={styles.capture}>
            <ActivityIndicator animating size={18} />
          </View>
        );
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
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
          />
          <View
            style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
          >
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
    backgroundColor: "#2A2E34"
  }
});

AppRegistry.registerComponent("Camera", () => Camera);
