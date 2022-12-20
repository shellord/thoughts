import React from 'react';
import {View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import tw from 'twrnc';

const StatusBarGap = () => {
  return <View style={tw`pt-[${getStatusBarHeight(true)}]`} />;
};

export default StatusBarGap;
