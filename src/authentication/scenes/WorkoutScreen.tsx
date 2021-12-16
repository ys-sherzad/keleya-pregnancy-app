import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image } from 'react-native';
import { RouterStackParamList, Screen } from '../types';
import { theme } from '../../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Space from '../../shared/Space';
import Button from '../../shared/Button';
import { Picker } from '@react-native-picker/picker';
import BackButton from '../../shared/BackButton';

const options = [
    'Once a week',
    '2 times a week',
    '3 times a week',
    '4 times a week',
    '5 times a week',
    '6 times a week',
    '7 times a week',
    '8 times a week',
];

type WorkoutScreenProps = StackScreenProps<RouterStackParamList, Screen.WorkoutScreen>;

const WorkoutScreen = ({
    navigation
}: WorkoutScreenProps) => {
    const [selectedFrequency, setSelectedFrequency] = useState(options[2]);

    const _goToSuccessScreen = () => navigation.push(Screen.SuccessScreen);

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='date_screen'
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/workout-goal-background-image.jpg')}
                style={styles.backgroundImage}
            />

            <Layout>

                <Space size={30} />

                <Picker
                    selectedValue={selectedFrequency}
                    onValueChange={(itemValue) =>
                        setSelectedFrequency(itemValue)
                    }>
                    {options.map(opt => (
                        <Picker.Item key={opt} label={opt} value={opt} fontFamily='Raleway' />
                    ))}
                </Picker>

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToSuccessScreen}
                    title='Continue'
                    mode='contained'
                />
            </Layout>

            <Title
                title={`How many times a week do you want to be active?`}
                customStyle={{
                    position: 'absolute',
                    top: 100,
                    left: 0,
                    right: 0,
                    paddingHorizontal: 50
                }}
            />

            <BackButton
                onPress={() => navigation.pop()}
            />
        </SafeAreaView>
    );
};

export default WorkoutScreen;

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
    },
    pickerItemStyle: {
        fontFamily: 'Raleway'
    }
});
