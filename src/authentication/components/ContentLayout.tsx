import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../../utils/scale';

type ContentLayoutProps = React.ComponentProps<typeof View>;

const ContentLayout = ({
    children,
    style,
    ...rest
}: ContentLayoutProps) => {

    return (
        <View
            style={[styles.defaultContainer, style]}
            {...rest}
        >
            {children}
        </View>
    );
};

export default ContentLayout;

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(32),
    }
});
