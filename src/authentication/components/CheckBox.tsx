import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Space from '../../shared/Space';
import CheckIcon from '../../../assets/icons/check.svg';
import { theme } from '../../utils/theme';
import { moderateScale, scale } from '../../utils/scale';

const CHECKBOX_SIZE = moderateScale(17);

interface CheckBoxProps {
    value: boolean;
    description: React.ReactNode;
    onValueChange: () => void;
    size?: number;
}

const CheckBox = ({
    value,
    description,
    onValueChange,
    size = CHECKBOX_SIZE
}: CheckBoxProps) => {
    return (
        <TouchableOpacity
            onPress={onValueChange}
            style={styles.container}
        >
            <View
                style={[styles.checkbox, { width: size, height: size }]}
            >
                {value && (<CheckIcon height='100%' width='100%' stroke={theme.greyish_brown} />)}
            </View>

            <Space size={10} horizontal />
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
        borderWidth: 1,
        borderRadius: 4,
        padding: 1,
        borderColor: theme.pale_teal
    }
});
