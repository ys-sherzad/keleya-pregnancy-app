import * as React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LeftArrow from '../../assets/icons/left-arrow.svg';
import { theme } from '../utils/theme';

type BackButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
    style?: StyleProp<ViewStyle>;
};

const BackButton = ({
    style,
    ...rest
}: BackButtonProps) => {

    return (
        <TouchableOpacity
            style={[styles.defaultStyle, style]}
            {...rest}
        >
            <LeftArrow height={20} width={20} fill={theme.greyish_brown} />
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        top: 50,
        left: 20,
        padding: 8
    }
});

