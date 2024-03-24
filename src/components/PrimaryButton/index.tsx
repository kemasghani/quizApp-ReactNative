import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './styles';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles.button}>
      <Text style={buttonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
