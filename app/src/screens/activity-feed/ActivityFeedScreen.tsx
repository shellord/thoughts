import React from 'react';
import {Text} from 'react-native';
import Container from '~/components/ui/Container';
import type {RootStackNavigationProp} from '~/navigators/types';

const ActivityFeedScreen: React.FC<
  RootStackNavigationProp<'ActivityFeed'>
> = () => {
  return (
    <Container>
      <Text>ActivityFeedScreen</Text>
    </Container>
  );
};

export default ActivityFeedScreen;
