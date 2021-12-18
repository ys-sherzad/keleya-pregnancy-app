import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../../../shared/Text';
import { theme } from '../../../utils/theme';
import dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    console.log('date >>> ', date);
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                    alignSelf: 'center',
                    padding: 10,
                    backgroundColor: theme.warm_grey,
                    borderRadius: 10,
                }}>
                <Text style={{
                    color: '#fff'
                }}>{dayjs(date).format('ll')}</Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => setDate(selectedDate)}
                />
            )}
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
