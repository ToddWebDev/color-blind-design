import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Permissions, Camera } from 'expo';
import CameraRoll from '../components/CameraRoll';
import ColorTray from '../components/ColorTray';

class ColorMatch extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    colorOne: null,
    colorTwo: null
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = async () => {
    if (this.camera) {
       await this.camera.takePictureAsync().then(
        data => { 
          console.log(data);
          this.setState({ colorOne: 'skyblue' });
        })
    }
  }

  render() {
    const { hasCameraPermission, colorOne, colorTwo } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={{position: 'absolute', top: 0, left: 0, zIndex: 100}}>
            <Icon name='keyboard-arrow-left' size={45} color={'#FA5F5F'} onPress={() => this.props.navigation.navigate('Home')}/>
          </View>
          <View style={styles.headerStyle}>
            <ColorTray colorOne={colorOne ? colorOne : undefined} colorTwo={colorTwo ? colorTwo : undefined}/>
          </View>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, padding: 25, backgroundColor:'rgba(188,178,178,0.4)'}}>
                  <Text style={{color: 'white', fontSize: 22, textAlign: 'center'}}>Hold the target over what you want to wear.</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.flipBtn}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Icon name={'switch-camera'} size={30} color={'rgba(255,255,255,0.6)'} />
              </TouchableOpacity>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Icon name={'crop-free'} size={30} color={'rgba(255,255,255,0.6)'} />
              </View>
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={styles.shutterBtn}
                  onPress={this.takePicture}>
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const Options = () => <View></View>

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  },

  shutterBtn: {
    backgroundColor: '#FA5F5F',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 65,
    width: 65,
    marginBottom: 10
  },

  flipBtn: {
    position: 'absolute',
    bottom: 25,
    right: 15
  },

  headerStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  }
};