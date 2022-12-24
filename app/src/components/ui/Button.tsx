import React from 'react';
import {View} from 'react-native';
import Font from './Font';
import tw from '~/lib/tailwind';

type Props = {
  title: string;
};

const Button: React.FC<Props> = ({title}) => {
  return (
    <View style={tw`bg-secondary px-6 py-3 rounded-full`}>
      <Font>{title}</Font>
    </View>
  );
};

export default Button;
