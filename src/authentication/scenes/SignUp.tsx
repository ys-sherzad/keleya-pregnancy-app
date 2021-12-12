import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';
import Title from '../components/Title';
import Input from '../components/Input';
import Space from '../../shared/Space';
import CheckBox from '../components/CheckBox';
import Button from '../../shared/Button';

interface SignUpProps { }

const SignUp = (props: SignUpProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [termsAndConditions, setTermsAndConditions] = useState(false);

    const _renderPrivacyPolicyText = () => (
        <Text>
            I've read the <Text>privacy policy</Text>
        </Text>
    );

    const _renderTermsAndConditionsText = () => (
        <Text>
            I accept <Text>the terms & conditions</Text> and <Text>Keleya's advice</Text>
        </Text>
    );

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

            <View style={{ flex: 1, marginTop: -40, paddingHorizontal: 40 }}>
                <Title
                    title={`Add your details below to set\nup and account`}
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
                    secureTextEntry={true}
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
                    onPress={() => { }}
                    title='Create Account'
                    primary
                />

            </View>



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
        // height: 500,
        // height: '100%',
        resizeMode: 'cover',
        // paddingTop: 0,
    }
});
