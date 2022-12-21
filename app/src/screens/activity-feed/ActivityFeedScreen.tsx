import React from 'react';
import {Text} from 'react-native';
import auth from '@react-native-firebase/auth';
// import {gql, useQuery} from '@apollo/client';
import Container from '~/components/ui/Container';
import type {RootStackNavigationProp} from '~/navigators/types';

// const GET_USER = gql`
//   query GetDogs {
//     dogs {
//       id
//       breed
//     }
//   }
// `;

const ActivityFeedScreen: React.FC<
  RootStackNavigationProp<'ActivityFeed'>
> = () => {
  const getIdToken = async () => {
    const idToken = await auth().currentUser?.getIdToken();
    console.log(idToken);
  };

  React.useEffect(() => {
    getIdToken();
  }, []);

  return (
    <Container>
      <Text>ActivityFeedScreen</Text>
    </Container>
  );
};

export default ActivityFeedScreen;
