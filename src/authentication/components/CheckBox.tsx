import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Space from '../../shared/Space';
import CheckIcon from '../../../assets/icons/check.svg';
import { theme } from '../../utils/theme';

interface CheckBoxProps {
    value: boolean;
    description: React.ReactNode;
    onValueChange: () => void;
}

const CheckBox = ({
    value,
    description,
    onValueChange,
}: CheckBoxProps) => {
    return (
        <TouchableOpacity
            onPress={onValueChange}
            style={styles.container}
        >
            <View
                style={[styles.checkbox, { borderColor: theme.pale_teal }]}
            >
                {value && (<CheckIcon height='100%' width='100%' stroke={theme.greyish_brown} />)}
            </View>

            <Space size={12} horizontal />
            {description}
        </TouchableOpacity>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderRadius: 4,
        padding: 1,
    }
});
