import React from 'react';
import {Text} from 'react-native';
import Container from '~/components/ui/Container';
import type {RootStackNavigationProp} from '~/navigators/types';
import {useCurrentUserQuery} from '~/generated/graphql';

const ActivityFeedScreen: React.FC<
  RootStackNavigationProp<'ActivityFeed'>
> = () => {
  const {data} = useCurrentUserQuery();
  console.log(data);

  return (
    <Container>
      <Text>ActivityFeedScreen</Text>
    </Container>
  );
};

export default ActivityFeedScreen;
