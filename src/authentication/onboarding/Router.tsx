import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './scenes/InitialScreen';

enum Screen {
    InitialScreen = 'InitialScreen',
    SignUpScreen = 'SignUpScreen',
    SignInScreen = 'SignInScreen',
    NameScreen = 'NameScreen',
    DateScreen = 'DateScreen',
    WorkoutScreen = 'WorkoutScreen',
    SuccessScreen = 'SuccessScreen',
};

interface RouterProps { }

const Stack = createStackNavigator();

const Router = (props: RouterProps) => {
    return (
        <Stack.Navigator
            initialRouteName='InitialScreen'
        >
            <Stack.Screen name={Screen.InitialScreen} component={InitialScreen} />
            <Stack.Screen name={Screen.SignUpScreen} component={() => <View />} />
            <Stack.Screen name={Screen.SignInScreen} component={() => <View />} />
            <Stack.Screen name={Screen.NameScreen} component={() => <View />} />
            <Stack.Screen name={Screen.DateScreen} component={() => <View />} />
            <Stack.Screen name={Screen.WorkoutScreen} component={() => <View />} />
            <Stack.Screen name={Screen.SuccessScreen} component={() => <View />} />

        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({
    container: {}
});
