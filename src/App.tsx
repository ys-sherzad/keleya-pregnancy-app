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
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationRouter from './authentication';


const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' />
        <AuthenticationRouter />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
