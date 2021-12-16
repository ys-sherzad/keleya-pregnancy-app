import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, StyleProp, TextStyle } from 'react-native';
import { theme } from '../../utils/theme';
import EyeOn from '../../../assets/icons/eye-on.svg';
import EyeOff from '../../../assets/icons/eye-off.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Space from '../../shared/Space';

type InputProps = React.ComponentProps<typeof TextInput> & {
  isPassword?: boolean;
  customInputStyle?: StyleProp<TextStyle>;
  customInputContainerStyle?: StyleProp<TextStyle>;
  error?: string;
};

const Input = ({
  customInputStyle,
  customInputContainerStyle,
  error,
  isPassword = false,
  ...rest
}: InputProps) => {

  // The state for showing/not showing text characters
  const [isTextSecure, setIsTextSecure] = useState(isPassword);

  const hasError = Boolean(error);

  const lineColorStyle = hasError && { backgroundColor: theme.red };

  return (
    <>
      <View style={[styles.container, customInputContainerStyle]}>
        <TextInput
          style={[styles.defaultInputStyle, customInputStyle]}
          secureTextEntry={isTextSecure}
          placeholderTextColor={theme.warm_grey}
          selectionColor={theme.greyish_brown}
          {...rest}
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

      <View style={[styles.line, lineColorStyle]} />

      {hasError &&
        (<View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>)
      }
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  defaultInputStyle: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 19,
    fontFamily: 'Raleway',
    fontWeight: '500',
    color: theme.greyish_brown,
  },
  line: {
    height: 1,
    backgroundColor: theme.greyish_brown
  },
  errorContainer: {
    paddingTop: 5
  },
  errorText: {
    fontSize: 11,
    color: theme.red,
  }
});
