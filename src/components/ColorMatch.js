import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ColorMatch extends Component {
  render() {
    console.log(this.props);
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