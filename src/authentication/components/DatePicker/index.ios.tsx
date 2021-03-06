import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
    return (
        <View style={styles.container}>
            <DateTimePicker
                testID="dateTimePicker"
                value={new Date()}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={() => { }}
            />
        </View>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    container: {
        width: 128,
        alignSelf: 'center'
    }
});
