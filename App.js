import React from 'react';
import AppNavigator from './src/Navigation';
import { ActivityIndicator } from 'react-native'


const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

export default class App extends React.Component {
  render() {
    return (
    <AppNavigator  persistenceKey={navigationPersistenceKey} renderLoadingExperimental={() => <ActivityIndicator /> }/>
    );
  }
}
