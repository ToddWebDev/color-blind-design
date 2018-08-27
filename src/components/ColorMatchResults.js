import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Results from './Results';
import InnerSection from './InnerSection';

export default class ColorMatchResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <Text style={styles.textHeader}> It's an 85% match </Text>
          <Text style={styles.text}>Result message text.</Text>
        </InnerSection>
        <InnerSection>
          <Results />
        </InnerSection>
        <InnerSection>
          <Text style={styles.textSubHeader}> Helpful Tips: </Text>
          <Text style={styles.text}>Add a neutral color to your wardrobe to really make these colors pop.</Text>
        </InnerSection>
        <InnerSection>
          <TouchableHighlight style={styles.button} onPress={
            () => this.props.navigation.navigate('ColorMatch')
          } underlayColor={'#FF5858'}
          >
            <View><Text style={styles.buttonText}>New Match</Text></View>
          </TouchableHighlight>
        </InnerSection>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  textHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },

  textSubHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },

  text: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 25
  },

  button: {
    marginTop: 50,
    borderRadius: 50,
    borderColor: '#FF5858',
    borderWidth: 3,
    padding: 20,
    width: 300
  },

  buttonText: {
    color: '#FF5858',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
};