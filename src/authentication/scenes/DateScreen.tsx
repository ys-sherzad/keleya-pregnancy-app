import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DateScreenProps { }

const DateScreen = (props: DateScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>DateScreen</Text>
        </View>
    );
};

export default DateScreen;

const styles = StyleSheet.create({
    container: {}
});
