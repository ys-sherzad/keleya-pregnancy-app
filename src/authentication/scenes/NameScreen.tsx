import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
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
import { nameRules } from '../../utils/validationRules';
import LinearGradient from 'react-native-linear-gradient';

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

    return (
        <SafeAreaView
            edges={['left', 'right', 'bottom']}
            testID='sign_up_screen'
            style={styles.container}
        >
            <KeyboardAwareView>
                <Image
                    source={require('../../../assets/images/couch_smile.jpg')}
                    style={styles.backgroundImage}
                />

                <ContentLayout style={styles.content}>

                    <LinearGradient
                        colors={gradientColors}
                        style={styles.shadowBox}
                    />

                    <Title
                        title={`It's great that you're here! First things first, what should we call you?`}
                    />

                    <Space size={25} />

                    <Controller
                        {...{ control }}
                        name='name'
                        rules={nameRules}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                value={value}
                                placeholder='Your Name'
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
                        title='Continue'
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
        width: '100%',
        resizeMode: 'cover',
        marginTop: -170,
    },
    content: {
        marginTop: -140,
    },
    shadowBox: {
        height: 40,
        position: 'absolute',
        top: -40,
        left: 0,
        right: 0,
    }
});
