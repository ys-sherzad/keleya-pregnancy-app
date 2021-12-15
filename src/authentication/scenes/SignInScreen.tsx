import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList, Screen } from '../types';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import Input from '../components/Input';
import Layout from '../components/Layout';
import Title from '../components/Title';

type SignInProps = StackScreenProps<RouterStackParamList, Screen.SignInScreen>;

const SignIn = ({
    navigation
}: SignInProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _goToSuccessScreen = () => navigation.push(Screen.SuccessScreen);

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/authentication-background-image.jpg')}
                style={styles.backgroundImage}
            />

            <Layout>
                <Title
                    title={`Welcome back!`}
                />

                <Space size={30} />

                <Input
                    placeholder='example@gmail.com'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Space size={26} />

                <Input
                    placeholder='Enter a password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    isPassword={true}
                />

                <View style={styles.flexOne} />

                <Button
                    onPress={() => { }}
                    title='Have you forgotten your password?'
                    customTextStyle={{
                        textAlign: 'center',
                        fontSize: 19,
                        fontWeight: '400'
                    }}
                />

                <Space size={12} />

                <Button
                    onPress={_goToSuccessScreen}
                    title='Log in'
                    primary
                />
            </Layout>



        </SafeAreaView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
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
