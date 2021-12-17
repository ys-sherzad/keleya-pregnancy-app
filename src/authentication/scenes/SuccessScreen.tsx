import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image } from 'react-native';
import { RouterStackParamList, Screen } from '../types';
import { theme } from '../../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Title';
import Space from '../../shared/Space';
import Button from '../../shared/Button';
import Bell from '../../../assets/icons/bell.svg';
import { moderateScale } from '../../utils/scale';
import { SCR_HEIGHT } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

const NOTIFICATION_BELL_SIZE = moderateScale(40);

type SuccessScreenProps = StackScreenProps<RouterStackParamList, Screen.SuccessScreen>;

const SuccessScreen = ({ }: SuccessScreenProps) => {

    const { t } = useTranslation();
    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/notifications-background-image.jpg')}
                style={styles.backgroundImage}
            />

            <View style={styles.topSection}>
                <Bell height={NOTIFICATION_BELL_SIZE} width={NOTIFICATION_BELL_SIZE} fill={theme.greyish_brown} />

                <Space size={20} />

                <Title
                    title={t('getNotificationsToBoostMotivation')}
                />
            </View>

            <View style={styles.bottomSection}>

                <Button
                    onPress={() => { }}
                    title={t('skip')}
                    customTextStyle={{
                        fontSize: moderateScale(19),
                    }}
                />

                <Space size={20} />

                <Button
                    onPress={() => { }}
                    title={t('allowNotifications')}
                    mode='contained'
                />
            </View>
        </SafeAreaView>
    );
};

export default SuccessScreen;

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
        height: SCR_HEIGHT,
        resizeMode: 'cover',
    },
    topSection: {
        position: 'absolute',
        top: 90,
        width: '100%',
        paddingHorizontal: moderateScale(40),
        alignItems: 'center'
    },
    bottomSection: {
        position: 'absolute',
        bottom: 35,
        width: '100%',
        paddingHorizontal: moderateScale(40),
    }
});
