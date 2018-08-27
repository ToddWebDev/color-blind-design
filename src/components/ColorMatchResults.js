import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ColorMatchResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> It's an 85% match </Text>
        <Button title='New Match' onPress={
          () => this.props.navigation.navigate('ColorMatch')
        }></Button>
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