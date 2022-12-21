import React from 'react';
import {Pressable, Text} from 'react-native';
import Container from '~/components/ui/Container';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const onLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <Container>
      <Text>ProfileScreen</Text>
      <Pressable onPress={onLogout}>
        <Text>Logout</Text>
      </Pressable>
    </Container>
  );
};

export default ProfileScreen;
