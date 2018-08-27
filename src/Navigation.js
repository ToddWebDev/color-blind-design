import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './components/Home';
import ColorMatch from './components/ColorMatch';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Colorblind Design',
      };
    }
  },
  ColorMatch: { screen: ColorMatch }
});

export default createSwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: 'App'
  }
);