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
          <Text style={styles.text}>These colors are analogous.</Text>
        </InnerSection>
        <InnerSection>
          <Results percentage='85' />
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
    paddingTop: 14,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  text: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 25,
    lineHeight: 30
  },

  button: {
    marginTop: 10,
    borderRadius: 50,
    borderColor: '#FF5858',
    borderWidth: 3,
    padding: 15,
    width: 300
  },

  buttonText: {
    color: '#FF5858',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
};