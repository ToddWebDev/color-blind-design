import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

export default class ColorTray extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="lens"
          size={40}
          iconStyle={{color:'#e5e5e5'}}
        />
        <Icon
          name="lens"
          size={40}
          iconStyle={{color:'#e5e5e5'}}
        />
      </View>
    )
  }
}