import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import DatePicker from '../components/DatePicker';
import Layout from '../components/Layout';
import Title from '../components/Title';

interface DateScreenProps { }

const DateScreen = (props: DateScreenProps) => {

    const _goToWorkoutScreen = () => { };

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='date_screen'
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/due-date-background-image.jpg')}
                style={styles.backgroundImage}
            />
            <Layout>
                <Title
                    title={`When is your baby due, Sam?`}
                />

                <Space size={30} />

                <DatePicker />

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToWorkoutScreen}
                    title='Continue'
                    primary
                />
            </Layout>
        </SafeAreaView>
    );
};

export default DateScreen;

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: theme.white,
        // alignItems: 'center',
        // alignItems: 'stretch'
    },
    backgroundImage: {
        width: '100%',
        resizeMode: 'cover',
    }
});
