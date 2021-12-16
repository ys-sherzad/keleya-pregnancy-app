import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

type LayoutProps = React.ComponentProps<typeof View>;

const Layout = ({
    children,
    style,
    ...rest
}: LayoutProps) => {

    return (
        <View
            style={[styles.defaultContainer, style]}
            {...rest}
        >
            {children}
        </View>
    );
};

export default Layout;

const styles = StyleSheet.create({
    defaultContainer: {
        flex: 1,
        marginTop: -40,
        paddingHorizontal: 50,
        backgroundColor: theme.white
    }
});
