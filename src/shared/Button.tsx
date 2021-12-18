import * as React from 'react';
import { StyleSheet, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { moderateScale, verticalScale } from '../utils/scale';
import { theme } from '../utils/theme';
import Text from './Text';

//FIXME: Refactor: Extend Touchable Props types
interface ButtonProps {
    onPress: () => void;
    title: string;
    mode?: 'text' | 'contained',
    disabled?: boolean,
    testID?: string;
    customTextStyle?: StyleProp<TextStyle>;
}

const Button = ({
    onPress,
    title,
    testID,
    customTextStyle,
    mode = 'text',
    disabled = false,
}: ButtonProps) => {

    const getButtonColor = () => {
        if (disabled) return theme.warm_grey;
        if (mode === 'contained') return theme.pale_teal;
        return 'transparent';
    };

    const getTextColor = () => {
        if (mode === 'contained') return theme.white;
        return theme.greyish_brown;
    };

    return (
        <TouchableOpacity
            {...{ testID }}
            {...{ onPress }}
            {...{ disabled }}
            style={[styles.defaultBtnStyle, { backgroundColor: getButtonColor() }]}>
            <Text style={[styles.defaultTitleStyle, customTextStyle, { color: getTextColor() }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    defaultBtnStyle: {
        height: moderateScale(45),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    defaultTitleStyle: {
        fontSize: moderateScale(23),
        fontWeight: '500'
    },

});
