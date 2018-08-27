import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Results extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.firstColor}></View>
        <View style={styles.resultCircle}>
          <Text style={styles.resultText}>{this.props.percentage}%</Text>
        </View>
        <View style={styles.secondColor}></View>
      </View>
    )
  }
}

const styles = {
  resultCircle: {
    zIndex: 1000,
    position: 'absolute',
    top: 23,
    left: 75,
    width: 70,
    height: 70,
    borderRadius: 100/2,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: 'green'
  },
  firstColor: {
    width: 115,
    height: 115,
    borderRadius: 115/2,
    backgroundColor: '#EED997',
    marginRight: -5
  },
  secondColor: {
    width: 115,
    height: 115,
    borderRadius: 115/2,
    backgroundColor: '#E87C64',
    marginLeft: -5
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
};