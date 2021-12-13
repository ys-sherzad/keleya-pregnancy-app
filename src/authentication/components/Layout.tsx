import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({
    children
}: LayoutProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -40,
        paddingHorizontal: 50,
    }
});
