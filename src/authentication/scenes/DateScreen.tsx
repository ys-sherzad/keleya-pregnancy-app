import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import DatePicker from '../components/DatePicker/index';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import { RouterStackParamList, Screen } from '../types';
import BackButton from '../../shared/BackButton';
import { SCR_HEIGHT } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

type DateScreenProps = StackScreenProps<RouterStackParamList, Screen.DateScreen>;

const DateScreen = ({
    route,
    navigation
}: DateScreenProps) => {

    const { name } = route.params;

    const _goToWorkoutScreen = () => navigation.push(Screen.WorkoutScreen);

    const { t } = useTranslation();
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
            <ContentLayout>
                <Title
                    title={`${t('whenIsYourBabyDue')} ${name}?`}
                />

                <Space size={30} />

                <DatePicker />

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToWorkoutScreen}
                    title={t('continue')}
                    mode='contained'
                />
            </ContentLayout>

            <BackButton
                onPress={() => navigation.pop()}
            />
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
        height: SCR_HEIGHT * .65,
        width: '100%',
        resizeMode: 'cover',
    }
});
