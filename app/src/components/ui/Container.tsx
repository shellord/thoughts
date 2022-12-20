import React, {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';
import tw from '~/lib/tailwind';
import StatusBarGap from './StatusBarGap';

const Container: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ScrollView style={tw`flex-1 bg-primary`}>
      <StatusBarGap />
      <View style={tw`p-4 flex-1`}>{children}</View>
    </ScrollView>
  );
};

export default Container;
