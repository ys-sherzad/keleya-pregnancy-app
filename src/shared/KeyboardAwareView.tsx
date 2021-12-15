import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface KeyboardAwareViewProps {
    children: React.ReactNode;
}

const KeyboardAwareView = ({
    children
}: KeyboardAwareViewProps) => {
    return (
        <KeyboardAwareScrollView
            bounces={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.flexOne}
        >
            {children}
        </KeyboardAwareScrollView>
    );
};

export default KeyboardAwareView;

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
});
