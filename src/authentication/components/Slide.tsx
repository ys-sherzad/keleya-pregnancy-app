import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Space from '../../shared/Space';
import { SCR_HEIGHT, SCR_WIDTH } from '../../utils/dimensions';
import { moderateScale } from '../../utils/scale';
import { theme } from '../../utils/theme';

interface SlideProps {
    page: any;
}

const Slide = ({
    page
}: SlideProps) => {
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
                    {page.description}
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
});
