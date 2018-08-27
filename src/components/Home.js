import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Let's get started!</Text>
        <Text style={styles.text}> Confidently match your clothes.</Text>
        <TouchableHighlight style={styles.button} onPress={
          () => this.props.navigation.navigate('ColorMatch')
        }>
          <View><Text style={styles.buttonText}>START</Text></View>
        </TouchableHighlight>
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
    justifyContent: 'space-around',
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 14,
    color: '#999',
  },

  button: {
    backgroundColor: '#FA5F5F',
    borderRadius: 50,
    height: 100,
    width: 100,
    paddingTop: 43,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
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