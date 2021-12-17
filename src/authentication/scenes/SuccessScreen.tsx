import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image, Dimensions, useWindowDimensions } from 'react-native';
import { RouterStackParamList, Screen } from '../types';
import { theme } from '../../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Title';
import Space from '../../shared/Space';
import Button from '../../shared/Button';
import Bell from '../../../assets/icons/bell.svg';
import { moderateScale } from '../../utils/scale';

const { height } = Dimensions.get('window');

type SuccessScreenProps = StackScreenProps<RouterStackParamList, Screen.SuccessScreen>;

const SuccessScreen = ({ }: SuccessScreenProps) => {

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
                <Bell height={moderateScale(50)} width={moderateScale(50)} fill={theme.greyish_brown} />

                <Space size={20} />

                <Title
                    title='Get notifications to boost your motivations'
                />
            </View>

            <View style={styles.bottomSection}>

                <Button
                    onPress={() => { }}
                    title='Skip'
                    customTextStyle={{
                        fontSize: moderateScale(19),
                    }}
                />

                <Space size={20} />

                <Button
                    onPress={() => { }}
                    title='Allow notifications'
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
        height: height,
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
