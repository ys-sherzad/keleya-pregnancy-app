import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';
import Title from '../components/Title';
import Input from '../components/Input';
import Space from '../../shared/Space';
import CheckBox from '../components/CheckBox';
import Button from '../../shared/Button';
import Layout from '../components/Layout';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList, Screen } from '../types';

type SignUpProps = StackScreenProps<RouterStackParamList, Screen.SignUpScreen>;

const SignUp = ({
    navigation
}: SignUpProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    const _renderPrivacyPolicyText = () => (
        <Text style={{ flex: 1 }}>
            I've read the <Text>privacy policy</Text>
        </Text>
    );

    const _renderTermsAndConditionsText = () => (
        <Text style={{ flex: 1 }}>
            I accept <Text>the terms & conditions</Text> and <Text>Keleya's advice</Text>
        </Text>
    );

    const _goToNameScreen = () => navigation.push(Screen.NameScreen);

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
                    title={`Add your details below to set up and account`}
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

                <Space size={26} />

                <CheckBox
                    value={privacyPolicy}
                    description={_renderPrivacyPolicyText()}
                    onValueChange={() => setPrivacyPolicy(!privacyPolicy)}
                />

                <Space size={20} />

                <CheckBox
                    value={termsAndConditions}
                    description={_renderTermsAndConditionsText()}
                    onValueChange={() => setTermsAndConditions(!termsAndConditions)}
                />

                <View style={styles.flexOne} />

                <Button
                    onPress={_goToNameScreen}
                    title='Create Account'
                    primary
                />
            </Layout>



        </SafeAreaView>
    );
};

export default SignUp;

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
