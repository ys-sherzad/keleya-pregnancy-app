import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import DatePicker from '../components/DatePicker';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { RouterStackParamList, Screen } from '../types';

type DateScreenProps = StackScreenProps<RouterStackParamList, Screen.DateScreen>;

const DateScreen = ({
    navigation
}: DateScreenProps) => {

    const _goToWorkoutScreen = () => navigation.push(Screen.WorkoutScreen);

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
    },
    backgroundImage: {
        width: '100%',
        resizeMode: 'cover',
    }
});