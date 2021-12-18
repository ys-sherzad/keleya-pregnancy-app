import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../shared/Button';
import Space from '../../shared/Space';
import { theme } from '../../utils/theme';
import Input from '../components/Input';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import { NameScreenFormData, RouterStackParamList, Screen } from '../types';
import KeyboardAwareView from '../../shared/KeyboardAwareView';
import BackButton from '../../shared/BackButton';
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../../utils/scale';
import { SCR_HEIGHT, SCR_WIDTH } from '../../utils/dimensions';
import { useTranslation } from 'react-i18next';

const gradientColors = ["#ffffff00", "rgb(255, 255, 255)", "rgb(255, 255, 255)"];

type NameScreenProps = StackScreenProps<RouterStackParamList, Screen.DateScreen>;

const NameScreen = ({
    navigation
}: NameScreenProps) => {
    const {
        control,
        handleSubmit,
        formState: {
            errors,
            isValid,
            touchedFields
        }
    } = useForm<NameScreenFormData>({
        mode: 'onChange',
        defaultValues: {
            name: ''
        }
    });

    const _continue = (data: NameScreenFormData) => {
        navigation.push(Screen.DateScreen, data);
    };

    const { t } = useTranslation();
    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <KeyboardAwareView>

                <View style={{
                    height: SCR_HEIGHT,
                    width: SCR_WIDTH,
                    marginTop: moderateScale(-140)
                }}>
                    <Image
                        source={require('../../../assets/images/couch_smile.jpg')}
                        style={styles.backgroundImage}
                    />
                </View>


                <ContentLayout style={{
                    marginTop: moderateScale(-120),
                    backgroundColor: theme.white
                }}>

                    <LinearGradient
                        colors={gradientColors}
                        style={styles.shadowBox}
                    />

                    <Title
                        title={t('whatShouldWeCallYou')}
                    />

                    <Space size={18} />

                    <Controller
                        {...{ control }}
                        name='name'
                        rules={{
                            required: true,
                            minLength: 2,
                            maxLength: {
                                value: 15,
                                message: t('maxLengthReached')
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                placeholder={t('yourName')}
                                testID='name_input'
                                onChangeText={onChange}
                                customInputStyle={{
                                    textAlign: 'center'
                                }}
                                error={
                                    errors.name
                                    && touchedFields.name
                                    && errors.name.message
                                }
                            />
                        )}
                    />

                    <View style={styles.flexOne} />

                    <Button
                        onPress={handleSubmit(_continue)}
                        title={t('continue')}
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
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    content: {
        marginTop: moderateScale(-120)
    },
    shadowBox: {
        height: moderateScale(30),
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
    }
});
