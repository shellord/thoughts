import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import tw from '~/lib/tailwind';

type Props = {
  className?: string;
};

const Font: React.FC<PropsWithChildren<Props>> = ({children, className}) => {
  return <Text style={tw.style('text-white', className)}>{children}</Text>;
};

export default Font;
