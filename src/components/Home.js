import React, { Component } from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Start' onPress={
          () => this.props.navigation.navigate('Match')
        }></Button>
      </View>
    )
  }
}

//What is the difference between StyleSheet.create and styles? 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// const styles = {
//   container: {
//     paddingTop: 24,
//     alignItems: 'center',
//   },

//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 13
//   }
// };