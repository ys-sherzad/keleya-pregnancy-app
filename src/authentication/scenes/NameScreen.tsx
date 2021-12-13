import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { RouterStackParamList, Screen } from '../types';

const { width, height } = Dimensions.get('window');

type NameScreenProps = StackScreenProps<RouterStackParamList, Screen.DateScreen>;

const NameScreen = ({
    navigation
}: NameScreenProps) => {
    const [name, setName] = useState('');

    const _goToDateScreen = () => navigation.push(Screen.DateScreen);

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/due-date-background-image.jpg')}
                style={styles.backgroundImage}
            />
            <Layout>
                <Title
                    title={`It's great that you're here! First things first, what should we call you?`}
                />

                <Space size={30} />

                <Input
                    value={name}
                    placeholder='Your Name'
                    testID='name_input'
                    onChangeText={(text) => setName(text)}
                    customInputStyle={{
                        textAlign: 'center'
                    }}
                />

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToDateScreen}
                    title='Continue'
                    primary
                />
            </Layout>
        </SafeAreaView>
    );
};

export default NameScreen;

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
    }
});
