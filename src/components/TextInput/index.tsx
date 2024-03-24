import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { inputStyles, labelStyles } from './style';

const CustomTextInput = (props) => {
  return (
    <View style={inputStyles.container}>
      <TextInput
        {...props}
        style={inputStyles.input}
      />
    </View>
  );
};

const CustomLabel = ({ children, style }) => {
  return (
    <Text style={[labelStyles.label, style]}>
      {children}
    </Text>
  );
};

export { CustomTextInput, CustomLabel };
