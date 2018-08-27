import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';

class App extends React.Component {
  render() {
    return (
      <View>
        <Button title='Start' style={styles.text} onPress={
          () => this.props.navigation.navigate('ColorMatch')
        }></Button>
      </View>
    );
  }
}

App.navigationOptions = {
  title: 'Colorblind Design'
}

const ColorMatch = () => <View>
    <Text style={styles.text}>Run Match Flow</Text>
  </View>

const Nav = createStackNavigator({
  App: { screen: App },
  ColorMatch: { screen: ColorMatch }
});

export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  }
});
