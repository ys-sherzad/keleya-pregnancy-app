import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SignInProps { }

const SignIn = (props: SignInProps) => {
    return (
        <View testID='sign_in_screen' style={styles.container}>
            <Text>SignIn Screen</Text>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {}
});
