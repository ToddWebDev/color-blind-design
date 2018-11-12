import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

export default class IconTitle extends Component {
  render() {
    return (
      <View>
        <Icon
          name="invert-colors"
          size={30}
          iconStyle={{color:'#FA5F5F'}}
        />
      </View>
    )
  }
}