import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import Space from '../../shared/Space';
import { SCR_HEIGHT, SCR_WIDTH } from '../../utils/dimensions';
import { moderateScale } from '../../utils/scale';
import { theme } from '../../utils/theme';
import { useTranslation } from 'react-i18next';
interface SlideProps {
    page: any;
}

const Slide = ({
    page
}: SlideProps) => {
    const { t } = useTranslation();
    return (
        <View>
            <View style={styles.topSectionContainer}>
                <Image
                    source={page.logo}
                    style={styles.logo}
                />
                <Space size={10} />
                <Text
                    style={styles.description}>
                    {t('fitAndRelaxedPregnancy')}
                </Text>
            </View>
            <Image
                source={page.backgroundImage}
                style={styles.image}
            />
        </View>
    );
};

export default Slide;

const styles = StyleSheet.create({
    image: {
        height: SCR_HEIGHT,
        width: SCR_WIDTH,
        resizeMode: 'cover',
    },
    topSectionContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 80 : 50,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(40),
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
        color: theme.greyish_brown,
    },
});
