import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './components/Home';
import ColorMatch from './components/ColorMatch';
import ColorMatchResults from './components/ColorMatchResults';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

const AppStack = createStackNavigator({
  ColorMatch: { 
    screen: ColorMatch
  },
  ColorMatchResults: { 
    screen: ColorMatchResults,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Colorblind Design',
      };
    }
  },
});

export default createSwitchNavigator(
  {
    Home: HomeStack,
    Match: AppStack
  },
  {
    initialRouteName: 'Home'
  }
);