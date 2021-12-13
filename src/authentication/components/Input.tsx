import * as React from 'react';
import { Text, View, StyleSheet, TextInput, StyleProp, TextStyle } from 'react-native';
import { theme } from '../../utils/theme';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  rightIcon?: any,
  secureTextEntry?: boolean;
  testID?: string;
  customInputStyle?: StyleProp<TextStyle>;
  customInputContainerStyle?: StyleProp<TextStyle>;
}

const Input = ({
  placeholder,
  onChangeText,
  value,
  rightIcon,
  customInputStyle,
  customInputContainerStyle,
  testID,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <View style={[styles.container, customInputContainerStyle]}>
      <TextInput
        testID={testID}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, customInputStyle]}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={theme.warm_grey}
        selectionColor={theme.greyish_brown}
      />

      {rightIcon && (
        <View style={{ height: 20, width: 20, backgroundColor: 'green' }} />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.greyish_brown,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 16,
    color: theme.greyish_brown,
  }
});
