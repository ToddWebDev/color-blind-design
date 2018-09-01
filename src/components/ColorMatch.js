import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import CameraRoll from '../components/CameraRoll';

class ColorMatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Init Color Match Flow </Text>
        <Button title='Finish' onPress={
          () => this.props.navigation.navigate('ColorMatchResults')
        }></Button> 
      </View>
    )
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
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  }
};