import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';
import Title from '../components/Title';
import Input from '../components/Input';
import Space from '../../shared/Space';
import CheckBox from '../components/CheckBox';
import Button from '../../shared/Button';
import ContentLayout from '../components/ContentLayout';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList, Screen } from '../types';
import Text from '../../shared/Text';
import KeyboardAwareView from '../../shared/KeyboardAwareView';
import { useForm, Controller } from 'react-hook-form';
import { checkboxRoules, emailRules, signUpPasswordRules } from '../../utils/validationRules';
import BackButton from '../../shared/BackButton';
import { moderateScale, verticalScale } from '../../utils/scale';

const { height } = Dimensions.get('window');

type SignUpProps = StackScreenProps<RouterStackParamList, Screen.SignUpScreen>;

const SignUp = ({
    navigation
}: SignUpProps) => {

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
            password: '',
            privacyPolicy: false,
            termsAndConditions: false,
        }
    });

    const _goToNameScreen = () => navigation.push(Screen.NameScreen);


    const _renderPrivacyPolicyText = () => (
        <Text style={styles.checkboxText}>
            I've read the <Text style={{ fontWeight: '700' }}>privacy policy</Text>
        </Text>
    );

    const _renderTermsAndConditionsText = () => (
        <Text style={styles.checkboxText}>
            I accept the <Text style={{ fontWeight: '700' }}>terms & conditions</Text> and <Text style={{ fontWeight: '700' }}>Keleya's advice</Text>
        </Text>
    );

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

                <ContentLayout>
                    <Title
                        title={`Add your details below to set up and account`}
                    />

                    <Space size={18} />

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

                    <Space size={15} />

                    <Controller
                        {...{ control }}
                        name='password'
                        rules={signUpPasswordRules}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder='Enter a password'
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                isPassword={true}
                                error={
                                    errors.password
                                    && touchedFields.password
                                    && errors.password.message
                                }
                            />
                        )}
                    />

                    <Space size={verticalScale(18)} />

                    <Controller
                        {...{ control }}
                        name='privacyPolicy'
                        rules={checkboxRoules}
                        render={({ field: { onChange, value } }) => (
                            <CheckBox
                                value={value}
                                description={_renderPrivacyPolicyText()}
                                onValueChange={() => onChange(!value)}
                            />
                        )}
                    />

                    <Space size={15} />

                    <Controller
                        {...{ control }}
                        name='termsAndConditions'
                        rules={checkboxRoules}
                        render={({ field: { onChange, value } }) => (
                            <CheckBox
                                value={value}
                                description={_renderTermsAndConditionsText()}
                                onValueChange={() => onChange(!value)}
                            />
                        )}
                    />

                    <View style={styles.flexOne} />

                    <Button
                        onPress={_goToNameScreen}
                        title='Create account'
                        mode='contained'
                        disabled={!isValid}
                    />
                </ContentLayout>

                <BackButton
                    onPress={() => navigation.pop()}
                />
            </KeyboardAwareView>
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
        height: height * .5,
        resizeMode: 'cover',
    },
    checkboxText: {
        flex: 1,
        fontSize: moderateScale(13),
        fontWeight: '500',
    }
});
