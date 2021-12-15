import React, { useState } from 'react';
import { View, StyleSheet, TextInput, StyleProp, TextStyle } from 'react-native';
import { theme } from '../../utils/theme';
import EyeOn from '../../../assets/icons/eye-on.svg';
import EyeOff from '../../../assets/icons/eye-off.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Space from '../../shared/Space';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  isPassword?: boolean;
  testID?: string;
  customInputStyle?: StyleProp<TextStyle>;
  customInputContainerStyle?: StyleProp<TextStyle>;
}

const Input = ({
  placeholder,
  onChangeText,
  value,
  customInputStyle,
  customInputContainerStyle,
  testID,
  isPassword = false,
}: InputProps) => {

  // The state for showing/not showing text characters
  const [isTextSecure, setIsTextSecure] = useState(isPassword);

  return (
    <View style={[styles.container, customInputContainerStyle]}>
      <TextInput
        testID={testID}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.defaultInputStyle, customInputStyle]}
        secureTextEntry={isTextSecure}
        placeholderTextColor={theme.warm_grey}
        selectionColor={theme.greyish_brown}
      />

      {isPassword && (
        <>
          <TouchableOpacity onPress={() => setIsTextSecure(isTextSecure => !isTextSecure)}>
            {isTextSecure
              ? (<EyeOn height={20} width={20} fill={theme.greyish_brown} />)
              : (<EyeOff height={20} width={20} fill={theme.greyish_brown} />)
            }
          </TouchableOpacity>

          <Space size={10} horizontal />
        </>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.greyish_brown,
    paddingVertical: 10,
  },
  defaultInputStyle: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Raleway',
    fontWeight: '500',
    color: theme.greyish_brown,
  }
});
