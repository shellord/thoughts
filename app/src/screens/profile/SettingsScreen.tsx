import React from 'react';
import {Pressable} from 'react-native';
import Container from '~/components/ui/Container';
import Font from '~/components/ui/Font';
import auth from '@react-native-firebase/auth';

const SettingsScreen = () => {
  const onLogout = () => {
    auth().signOut();
  };

  return (
    <Container>
      <Font>SettingsScreen</Font>
      <Pressable onPress={onLogout}>
        <Font>Logout</Font>
      </Pressable>
    </Container>
  );
};

export default SettingsScreen;
