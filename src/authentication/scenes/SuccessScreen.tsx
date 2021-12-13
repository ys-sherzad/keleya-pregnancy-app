import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';
import { RouterStackParamList, Screen } from '../types';

type SuccessScreenProps = StackScreenProps<RouterStackParamList, Screen.SuccessScreen>;

const SuccessScreen = (props: SuccessScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>SuccessScreen</Text>
        </View>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {}
});
