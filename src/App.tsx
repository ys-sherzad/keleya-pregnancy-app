/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


const App = () => {
  const [show, setShowText] = useState(false);

  const onPress = () => setShowText(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text testID='HELLO-KELEYA'>
          Hello Keleya
        </Text>

        <TouchableOpacity onPress={onPress} style={{ borderWidth: 1, marginTop: 20, padding: 20 }}>
          <Text>Press me</Text>
        </TouchableOpacity>

        {show && <Text testID='WOO'>Woo</Text>}
      </View>
    </SafeAreaView>
  );
};

export default App;
