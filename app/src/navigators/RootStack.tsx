import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityFeedScreen from '~/screens/ActivityFeedScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ActivityFeedScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
