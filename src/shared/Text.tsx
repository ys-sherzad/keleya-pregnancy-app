import React from 'react';
import { Text as RNText, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { theme } from '../utils/theme';

type TextProps = React.ComponentProps<typeof RNText> & {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
};

const Text = ({
    children,
    style,
    ...rest
}: TextProps) => {
    return (
        <RNText
            style={[styles.defaultStyle, style]}
            {...rest}
        >
            {children}
        </RNText>
    );
};

export default Text;

const styles = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Raleway',
        color: theme.greyish_brown
    }
});
