import * as React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle, Platform } from 'react-native';
import LeftArrow from '../../assets/icons/left-arrow.svg';
import { moderateScale } from '../utils/scale';
import { theme } from '../utils/theme';

const ICON_SIZE = moderateScale(18);

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
            <LeftArrow height={ICON_SIZE} width={ICON_SIZE} fill={theme.greyish_brown} />
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 20,
        left: 20,
        padding: moderateScale(6)
    }
});

