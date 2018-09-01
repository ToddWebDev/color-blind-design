import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Permissions, Camera } from 'expo';
import CameraRoll from '../components/CameraRoll';

class ColorMatch extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={styles.flipBtn}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text><Icon name={'switch-camera'} size={30} color={'rgba(255,255,255,0.6)'} /></Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shutterBtn}
                onPress={this.takePicture}>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }

  takePicture = async () => {
    if (this.camera) {
       await this.camera.takePictureAsync().then(
        data => { 
          console.log(data);
        })
    }
  }
}

const Options = () => <View>	
  <Text style={styles.text}>Options</Text>	
  </View>	

const Tabs = createBottomTabNavigator(
  {
    Photos: { screen: CameraRoll },
    ColorMatch: { screen: ColorMatch },
    Options: { screen: Options }
  },
  {
    initialRouteName: 'ColorMatch',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ColorMatch') {
          iconName = `invert-colors`;
        } else if (routeName === 'Photos') {
          iconName = `collections`;
        } else if (routeName === 'Options') {
          iconName = `more-horiz`;
        }
        return <Icon name={iconName} size={25} color={tintColor}/>;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default Tabs;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  },

  shutterBtn: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FA5F5F',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
    width: 50,
  },

  flipBtn: {
    position: 'absolute',
    top: 10,
    right: 10
  }
};