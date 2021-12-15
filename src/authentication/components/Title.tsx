import * as React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import Text from '../../shared/Text';
import { theme } from '../../utils/theme';

interface TitleProps {
    title: string;
    customStyle?: StyleProp<TextStyle>;
}

const Title = ({
    title,
    customStyle,
}: TitleProps) => {
    return (
        <Text style={[styles.title, customStyle]}>{title}</Text>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: theme.greyish_brown,
        textAlign: 'center',
        paddingHorizontal: 8
    }
});
