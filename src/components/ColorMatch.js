import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ColorMatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Init Color Match Flow </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 24,
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  }
};