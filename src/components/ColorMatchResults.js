import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';


class ColorMatchResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Color Match Results </Text>
      </View>
    )
  }
}

const Results = () => <View>	
    <Text style={styles.text}>Results</Text>	
  </View>	

const Photos = () => <View>	
    <Text style={styles.text}>Photos</Text>	
  </View>	

const Options = () => <View>	
  <Text style={styles.text}>Options</Text>	
  </View>	


const Tabs = createBottomTabNavigator(
  {
    Photos: { screen: Photos },
    Results: { screen: Results },
    Options: { screen: Options }
  },
  {
    initialRouteName: 'Results',
  }
);

export default Tabs;


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