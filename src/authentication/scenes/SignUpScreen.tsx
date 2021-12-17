import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
import { emailRegex, passwordRegex } from '../../utils/validationRules';
import BackButton from '../../shared/BackButton';
import { moderateScale } from '../../utils/scale';
import { SCR_HEIGHT } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

    const _goToNameScreen = () => navigation.push(Screen.NameScreen);

    const _openPrivacyPolicy = () => { };

    const _openTermAndConditions = () => { };

    const _openKeleyaAdvice = () => { };

    const _renderPrivacyPolicyText = () => (
        <Text style={styles.checkboxText}>
            {t('iHaveReadThe')} <Text onPress={_openPrivacyPolicy} style={styles.textBold}>{t('privacyPolicy')}</Text>
        </Text>
    );

    const _renderTermsAndConditionsText = () => (
        <Text style={styles.checkboxText}>
            {t('iAcceptThe')} <Text onPress={_openTermAndConditions} style={styles.textBold}>{t('termsAndConditions')}</Text> {t('and')} <Text onPress={_openKeleyaAdvice} style={styles.textBold}>{t('keleyaAdvice')}</Text>
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
                        title={t('addDetailsBelow')}
                    />

                    <Space size={18} />

                    <Controller
                        {...{ control }}
                        name='email'
                        rules={{
                            required: true,
                            pattern: {
                                value: emailRegex,
                                message: t('pleaseEnterValidEmail')
                            }
                        }}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder={t('exampleEmail')}
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
                        rules={{
                            required: true,
                            pattern: {
                                value: passwordRegex,
                                message: t('passwordValidation')
                            }
                        }}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder={t('enterPassword')}
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

                    <Space size={18} />

                    <Controller
                        {...{ control }}
                        name='privacyPolicy'
                        rules={{
                            required: true
                        }}
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
                        rules={{
                            required: true
                        }}
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
                        title={t('createAccount')}
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
        height: SCR_HEIGHT * .5,
        resizeMode: 'cover',
    },
    checkboxText: {
        flex: 1,
        fontSize: moderateScale(13),
        fontWeight: '500',
    },
    textBold: {
        fontWeight: '700'
    }
});
