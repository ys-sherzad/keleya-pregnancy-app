import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SignUpProps { }

const SignUp = (props: SignUpProps) => {
    return (
        <View testID='sign_up_screen' style={styles.container}>
            {/* <Image
                source={require('../../../assets/images/authentication-background-image.jpg')}
                style={styles.backgroundImage}
            /> */}

            <Text>Signup Screen</Text>

        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
    },
    backgroundImage: {
        width: '100%',
        // height: '100%',
        resizeMode: 'cover',
        // paddingTop: 0,
    }
});
