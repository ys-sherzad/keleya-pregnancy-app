import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
    return (
        <Picker
            selectedValue={selectedFrequency}
            onValueChange={setSelectedFrequency}>
            {options.map(opt => (
                <Picker.Item key={opt} label={opt} value={opt} fontFamily='Raleway' />
            ))}
        </Picker>
    );
};

export default WorkoutPicker;

const styles = StyleSheet.create({
    container: {}
});
