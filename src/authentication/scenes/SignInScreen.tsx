import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList, Screen } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import Input from '../components/Input';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import KeyboardAwareView from '../../shared/KeyboardAwareView';
import { useForm, Controller } from 'react-hook-form';
import { emailRegex, passwordRegex } from '../../utils/validationRules';
import BackButton from '../../shared/BackButton';
import { moderateScale } from '../../utils/scale';
import { SCR_HEIGHT } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();
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
                        title={t('welcomeBack')}
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
                            required: true
                        }}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <Input
                                placeholder={t('enterPassword')}
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
                        title={t('forgotPassword')}
                        customTextStyle={styles.forgotPasswordText}
                    />

                    <Space size={10} />

                    <Button
                        onPress={_goToSuccessScreen}
                        title={t('login')}
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
        height: SCR_HEIGHT * .5,
        resizeMode: 'cover',
        overflow: 'visible'
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: moderateScale(18),
        fontWeight: '400'
    }
});
