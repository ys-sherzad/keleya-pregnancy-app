import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, StyleSheet, Image } from 'react-native';
import { RouterStackParamList, Screen } from '../types';
import { theme } from '../../utils/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Space from '../../shared/Space';
import Button from '../../shared/Button';

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
                <Text>ICON</Text>

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
                        fontSize: 16,
                        fontWeight: '400'
                    }}
                />

                <Space size={20} />

                <Button
                    onPress={() => { }}
                    title='Continue'
                    primary
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
        resizeMode: 'cover',
    },
    topSection: {
        position: 'absolute',
        top: 90,
        width: '100%',
        paddingHorizontal: 50,
        alignItems: 'center'
    },
    bottomSection: {
        position: 'absolute',
        bottom: 35,
        width: '100%',
        paddingHorizontal: 50,
    }
});
