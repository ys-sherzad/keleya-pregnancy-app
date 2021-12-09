import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface InitialScreenProps { }

const InitialScreen = (props: InitialScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>InitialScreen</Text>
        </View>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    container: {}
});
