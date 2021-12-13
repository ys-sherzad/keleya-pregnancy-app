import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface WorkoutScreenProps { }

const WorkoutScreen = (props: WorkoutScreenProps) => {
    return (
        <View style={styles.container}>
            <Text>WorkoutScreen</Text>
        </View>
    );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
    container: {}
});
