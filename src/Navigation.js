import React, { Component } from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './components/Home';
import IconTitle from './components/IconTitle';
import ColorTray from './components/ColorTray';
import ColorMatch from './components/ColorMatch';
import ColorMatchResults from './components/ColorMatchResults';
import { Icon } from 'react-native-elements'

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <IconTitle />,
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomWidth: 0
        }
      };
    }
  },
  ColorMatch: { 
    screen: ColorMatch,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <ColorTray />,
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomWidth: 0
        }
      };
    }
  },
  ColorMatchResults: { 
    screen: ColorMatchResults,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: <IconTitle />,
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomWidth: 0
        },
        // headerRight: (
        //   <Icon 
        //     name="bookmark-border"
        //     size={30}
        //     onPress={() => null }
        //     iconStyle={{paddingRight: 10, color:'#999'}}
        //   />
        // ),
        headerLeft: null
      };
    }
  },
});

export default createSwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
);