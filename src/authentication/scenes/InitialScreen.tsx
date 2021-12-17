import * as React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Text from '../../shared/Text';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import { RouterStackParamList, Screen } from '../types';
import { StackScreenProps } from '@react-navigation/stack';
import { moderateScale, scale, verticalScale } from '../../utils/scale';

const { height, width } = Dimensions.get('window');

const pages = [
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
        description: `For a fit and relaxed\npregnancy`
    },
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
        description: `For a fit and relaxed\npregnancy`
    },
    {
        logo: require('../../../assets/images/keleya-logo.png'),
        backgroundImage: require('../../../assets/images/first-intro-image.png'),
        description: `For a fit and relaxed\npregnancy`
    },
];

type InitialScreenProps = StackScreenProps<RouterStackParamList, Screen.InitialScreen>;

const InitialScreen = ({ navigation }: InitialScreenProps) => {

    const _goToSignUp = () => navigation.push(Screen.SignUpScreen);

    const _goToSignIn = () => navigation.push(Screen.SignInScreen);

    return (
        <View testID="initial_screen">
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {pages.map((page, index) => (
                    <View key={index.toString()}>
                        <View style={styles.topSectionContainer}>
                            <Image
                                source={page.logo}
                                style={styles.logo}
                            />
                            <Space size={10} />
                            <Text
                                style={styles.description}>
                                {page.description}
                            </Text>
                        </View>
                        <Image
                            source={page.backgroundImage}
                            style={styles.image}
                        />
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottomSectionContainer}>
                <Button
                    testID='get_started'
                    onPress={_goToSignUp}
                    title='Get Started'
                    mode='contained'
                />
                <Button
                    testID='login'
                    onPress={_goToSignIn}
                    title='Or login'
                />
                <View
                    testID='nav_dots'
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    {Array(3).fill(0).map((_, index) => (
                        <View
                            key={index.toString()}
                            style={styles.dot}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default InitialScreen;

const styles = StyleSheet.create({
    container: {},
    image: {
        height,
        width,
        resizeMode: 'cover',
    },
    topSectionContainer: {
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    logo: {
        height: moderateScale(110),
        width: moderateScale(110),
        resizeMode: 'contain'
    },
    description: {
        textAlign: 'center',
        fontSize: moderateScale(23),
        fontWeight: '500',
        color: theme.greyish_brown
    },
    bottomSectionContainer: {
        position: 'absolute',
        bottom: 20,
        height: verticalScale(120),
        width: '84%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: moderateScale(8),
        paddingBottom: 20,
        justifyContent: 'space-around',
    },
    dot: {
        height: moderateScale(10),
        width: moderateScale(10),
        borderRadius: 99,
        backgroundColor: theme.pale_teal,
        marginHorizontal: 3
    }
});
