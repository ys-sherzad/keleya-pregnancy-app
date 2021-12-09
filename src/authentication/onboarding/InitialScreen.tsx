import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';

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

interface InitialScreenProps { }

const InitialScreen = (props: InitialScreenProps) => {
    return (
        <>
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
                            <Text style={styles.description}>
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
                    onPress={() => { }}
                    title='Get Started'
                    primary
                />
                <Button
                    onPress={() => { }}
                    title='Or login'
                />

                <View style={{
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
        </>
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
        height: 120,
        width: 120,
        resizeMode: 'contain'
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
    },
    bottomSectionContainer: {
        position: 'absolute',
        bottom: 20,
        height: '18%',
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'space-around',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: theme.pale_teal,
        marginHorizontal: 3
    }
});
