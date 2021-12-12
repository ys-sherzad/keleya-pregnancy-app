import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

interface TitleProps {
    title: string;
}

const Title = ({
    title,
}: TitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 22,
        color: theme.greyish_brown,
        textAlign: 'center',
    }
});
