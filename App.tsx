import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import StackNavigator from './src/navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';

export default () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
