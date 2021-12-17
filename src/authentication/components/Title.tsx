import * as React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import Text from '../../shared/Text';
import { moderateScale } from '../../utils/scale';
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
        fontSize: moderateScale(20),
        color: theme.greyish_brown,
        textAlign: 'center',
        paddingHorizontal: moderateScale(5)
    }
});
