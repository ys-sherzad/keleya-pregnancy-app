import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
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
import { emailRules, signInPasswordRules } from '../../utils/validationRules';
import BackButton from '../../shared/BackButton';
import { moderateScale, verticalScale } from '../../utils/scale';

type SignInProps = StackScreenProps<RouterStackParamList, Screen.SignInScreen>;

const { height, width } = Dimensions.get('window');

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

                <ContentLayout
                    style={{
                        marginTop: -40
                    }}
                >
                    <Title
                        title={`Welcome back!`}
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

                    <Space size={10} />

                    <Button
                        onPress={_goToSuccessScreen}
                        title='Log in'
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
        height: height * .5,
        resizeMode: 'cover',
        overflow: 'visible'
    },
    forgotPasswordText: {
        textAlign: 'center',
        fontSize: moderateScale(18),
        fontWeight: '400'
    }
});
