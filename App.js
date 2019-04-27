import React from 'react';
import AppNavigator from './src/Navigation';
import { SafeAreaView, ActivityIndicator } from 'react-native';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppNavigator
          persistenceKey={navigationPersistenceKey}
          renderLoadingExperimental={() => <ActivityIndicator />}
        />
      </SafeAreaView>
    );
  }
}
