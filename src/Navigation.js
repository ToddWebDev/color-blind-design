import React, { Component } from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './components/Home';
import ColorMatch from './components/ColorMatch';
import ColorMatchResults from './components/ColorMatchResults';
import { Icon } from 'react-native-elements'

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  },
  ColorMatch: { 
    screen: ColorMatch
  },
  ColorMatchResults: { 
    screen: ColorMatchResults,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Colorblind Design',
        headerRight: (
          <Icon 
            name="bookmark-border"
            size={30}
            onPress={() => null }
            iconStyle={{paddingRight: 10, color:'#999'}}
          />
        ),
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