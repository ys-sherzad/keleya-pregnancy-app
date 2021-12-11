/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationRouter from './authentication';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <AuthenticationRouter />
        {/* <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' />
        <AuthenticationRouter />
      </SafeAreaView> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
