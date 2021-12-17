import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList, Screen } from '../types';
import { theme } from '../../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import Space from '../../shared/Space';
import Button from '../../shared/Button';
import { Picker } from '@react-native-picker/picker';
import BackButton from '../../shared/BackButton';
import { moderateScale } from '../../utils/scale';
import { SCR_HEIGHT } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();
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

            <ContentLayout>

                <Space size={25} />

                <Picker
                    selectedValue={selectedFrequency}
                    onValueChange={setSelectedFrequency}>
                    {options.map(opt => (
                        <Picker.Item key={opt} label={opt} value={opt} fontFamily='Raleway' />
                    ))}
                </Picker>

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToSuccessScreen}
                    title={t('continue')}
                    mode='contained'
                />
            </ContentLayout>

            <Title
                title={t('howManyTimeAweekActive')}
                customStyle={{
                    position: 'absolute',
                    top: 100,
                    left: 0,
                    right: 0,
                    paddingHorizontal: moderateScale(45)
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
        height: SCR_HEIGHT * .65,
        resizeMode: 'cover',
    },
    pickerItemStyle: {
        fontFamily: 'Raleway'
    }
});
