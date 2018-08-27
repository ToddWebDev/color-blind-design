import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Text onPress={
          () => this.props.navigation.navigate('ColorMatch')
        }>Start</Text>
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