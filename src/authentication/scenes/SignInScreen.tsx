import React from 'react';
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
import KeyboardAwareView from '../../shared/KeyboardAwareView';
import { useForm, Controller } from 'react-hook-form';
import { emailRules, signInPasswordRules } from '../../utils/validationRules';
import BackButton from '../../shared/BackButton';

type SignInProps = StackScreenProps<RouterStackParamList, Screen.SignInScreen>;

const SignIn = ({
    navigation
}: SignInProps) => {

    const {
        control,
        handleSubmit,
        formState: {
            errors,
            isValid,
            touchedFields,
        }
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const _goToSuccessScreen = () => navigation.push(Screen.SuccessScreen);

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <KeyboardAwareView>
                <Image
                    source={require('../../../assets/images/authentication-background-image.jpg')}
                    style={styles.backgroundImage}
                />

                <Layout>
                    <Title
                        title={`Welcome back!`}
                    />

                    <Space size={25} />

                    <Controller
                        {...{ control }}
                        name='email'
                        rules={emailRules}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder='example@gmail.com'
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                                error={errors.email && touchedFields.email && errors.email?.message}
                            />
                        )}
                    />

                    <Space size={26} />

                    <Controller
                        {...{ control }}
                        name='password'
                        rules={signInPasswordRules}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder='Enter a password'
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                clearTextOnFocus={true}
                                isPassword={true}
                                error={
                                    errors.password
                                    && touchedFields.password
                                    && errors.password.message
                                }
                            />
                        )}
                    />

                    <View style={styles.flexOne} />

                    <Button
                        onPress={() => { }}
                        title='Have you forgotten your password?'
                        customTextStyle={styles.forgotPasswordText}
                    />

                    <Space size={12} />

                    <Button
                        onPress={_goToSuccessScreen}
                        title='Log in'
                        mode='contained'
                        disabled={!isValid}
                    />
                </Layout>

                <BackButton
                    onPress={() => navigation.pop()}
                />
            </KeyboardAwareView>
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
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '400'
    }
});
