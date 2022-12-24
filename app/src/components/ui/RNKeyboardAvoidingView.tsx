import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import tw from 'twrnc';

const RNKeyboardAvoidingView: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}
      keyboardVerticalOffset={10}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default RNKeyboardAvoidingView;
