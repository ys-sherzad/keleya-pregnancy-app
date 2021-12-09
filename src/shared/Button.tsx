import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../utils/theme';

interface ButtonProps {
    onPress: () => void;
    title: string;
    primary?: boolean;
    testID?: string;
}

const Button = ({
    onPress,
    title,
    testID,
    primary = false,
}: ButtonProps) => {

    const buttonStyle = primary ? { backgroundColor: theme.pale_teal } : { backgroundColor: 'transparent' };
    const titleStyle = primary ? { color: theme.white } : { color: theme.greyish_brown };

    return (
        <TouchableOpacity
            {...{ testID }}
            {...{ onPress }}
            style={[styles.btn, buttonStyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btn: {
        height: 57,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '600'
    }
});
