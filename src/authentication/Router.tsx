import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import InitialScreen from './scenes/InitialScreen';
import SignUp from './scenes/SignUp';
import SignIn from './scenes/SignIn';
import NameScreen from './scenes/NameScreen';
import WorkoutScreen from './scenes/WorkoutScreen';
import SuccessScreen from './scenes/SuccessScreen';

import { RouterStackParamList, Screen } from './types';
import DateScreen from './scenes/DateScreen';


const Stack = createStackNavigator<RouterStackParamList>();

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='InitialScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={Screen.InitialScreen} component={InitialScreen} />
            <Stack.Screen name={Screen.SignUpScreen} component={SignUp} />
            <Stack.Screen name={Screen.SignInScreen} component={SignIn} />
            <Stack.Screen name={Screen.NameScreen} component={NameScreen} />
            <Stack.Screen name={Screen.DateScreen} component={DateScreen} />
            <Stack.Screen name={Screen.WorkoutScreen} component={WorkoutScreen} />
            <Stack.Screen name={Screen.SuccessScreen} component={SuccessScreen} />
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({
    container: {}
});
