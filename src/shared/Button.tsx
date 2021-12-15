import * as React from 'react';
import { StyleSheet, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { theme } from '../utils/theme';
import Text from './Text';

interface ButtonProps {
    onPress: () => void;
    title: string;
    primary?: boolean;
    testID?: string;
    customTextStyle?: StyleProp<TextStyle>;
}

const Button = ({
    onPress,
    title,
    testID,
    customTextStyle,
    primary = false,
}: ButtonProps) => {

    const buttonBackgroundColorStyle = primary ? { backgroundColor: theme.pale_teal } : { backgroundColor: 'transparent' };
    const titleColorStyle = primary ? { color: theme.white } : { color: theme.greyish_brown };

    return (
        <TouchableOpacity
            {...{ testID }}
            {...{ onPress }}
            style={[styles.defaultBtnStyle, buttonBackgroundColorStyle]}>
            <Text style={[styles.defaultTitleStyle, titleColorStyle, customTextStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    defaultBtnStyle: {
        height: 57,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    defaultTitleStyle: {
        fontSize: 24,
        fontWeight: '600'
    }
});
