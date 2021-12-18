import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Platform } from 'react-native';
import Button from '../../shared/Button';
import { RouterStackParamList, Screen } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { moderateScale } from '../../utils/scale';
import { SCR_WIDTH } from '../../utils/dimensions';
import NavDot from '../components/NavDot';
import Slide from '../components/Slide';
import { useTranslation } from 'react-i18next';

const pages = [
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
    },
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
    },
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
    },
];

type InitialScreenProps = StackScreenProps<RouterStackParamList, Screen.InitialScreen>;

const InitialScreen = ({ navigation }: InitialScreenProps) => {


    const [activeIndex, setActiveIndex] = useState(0);

    const _goToSignUp = () => navigation.push(Screen.SignUpScreen);

    const _goToSignIn = () => navigation.push(Screen.SignInScreen);

    const _onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { x } = event.nativeEvent.contentOffset;
        const index = Math.round(x / SCR_WIDTH);
        setActiveIndex(index);
    };

    const { t } = useTranslation();
    return (
        <View testID="initial_screen">
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={_onScroll}
                scrollEventThrottle={16}
            >
                {pages.map((page, index) => (
                    <Slide
                        key={index.toString()}
                        {...{ page }}
                    />
                ))}
            </ScrollView>

            <View style={styles.bottomSectionContainer}>
                <Button
                    testID='get_started'
                    onPress={_goToSignUp}
                    title={t('getStarted')}
                    mode='contained'
                />
                <Button
                    testID='login'
                    onPress={_goToSignIn}
                    title={t('orLogin')}
                />
                <View
                    testID='nav_dots'
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    {Array(pages.length).fill('').map((_, index) => (
                        <NavDot
                            key={index.toString()}
                            currentIndex={index}
                            {...{ activeIndex }}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    bottomSectionContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 40 : 0,
        height: moderateScale(120),
        width: '84%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: moderateScale(8),
        justifyContent: 'space-around',
    },

});
