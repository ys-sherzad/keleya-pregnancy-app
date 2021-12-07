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
  StyleSheet,
  View,
  Text
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text testID='HELLO-KELEYA'>
          Hello Keleya
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
