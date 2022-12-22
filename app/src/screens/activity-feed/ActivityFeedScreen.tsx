import React from 'react';
import {Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import Container from '~/components/ui/Container';
import type {RootStackNavigationProp} from '~/navigators/types';

const GET_CURRENT_USER = gql`
  query CurrentUserQuery {
    me {
      id
      name
      email
    }
  }
`;

const ActivityFeedScreen: React.FC<
  RootStackNavigationProp<'ActivityFeed'>
> = () => {
  const {data} = useQuery(GET_CURRENT_USER);
  console.log(data);

  return (
    <Container>
      <Text>ActivityFeedScreen</Text>
    </Container>
  );
};

export default ActivityFeedScreen;
