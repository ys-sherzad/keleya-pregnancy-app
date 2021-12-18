import React, { useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Text from '../../../shared/Text';
import { moderateScale } from '../../../utils/scale';

interface WorkoutPickerProps {
    selectedFrequency: string;
    setSelectedFrequency: (arg: string) => void;
    options: any;
}

const WorkoutPicker = ({
    selectedFrequency,
    setSelectedFrequency,
    options
}: WorkoutPickerProps) => {
    const pickerRef = useRef();

    function open() {
        pickerRef.current?.focus();
    }

    function close() {
        pickerRef.current?.blur();
    }
    return (
        <View>
            <TouchableOpacity onPress={open} style={{
                alignSelf: 'center',
                marginTop: 20,
            }}>
                <Text style={{
                    fontSize: moderateScale(14)
                }}>{selectedFrequency}</Text>
            </TouchableOpacity>

            <Picker
                selectedValue={selectedFrequency}
                onValueChange={setSelectedFrequency}>
                {options.map(opt => (
                    <Picker.Item key={opt} label={opt} value={opt} fontFamily='Raleway' />
                ))}
            </Picker>
        </View>
    );
};

export default WorkoutPicker;

