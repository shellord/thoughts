import React from 'react';
import {View} from 'react-native';
import tw from '~/lib/tailwind';

const Divider = () => {
  return <View style={tw`h-[0.05rem] bg-gray-600`} />;
};

export default Divider;
