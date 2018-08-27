import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';

class ColorMatch extends Component {
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
    ColorMatch: { screen: ColorMatch },
    Options: { screen: Options }
  },
  {
    initialRouteName: 'ColorMatch',
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