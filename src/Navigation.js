import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './components/Home';
import ColorMatch from './components/ColorMatch';
import ColorMatchResults from './components/ColorMatchResults';

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  },
  ColorMatch: { 
    screen: ColorMatch
  },
  ColorMatchResults: { 
    screen: ColorMatchResults,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Colorblind Design',
        headerLeft: null
      };
    }
  },
});

export default createSwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
);