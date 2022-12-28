import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import Container from '~/components/ui/Container';
import auth from '@react-native-firebase/auth';
import ProfileSection from '~/components/ProfileSection';
import tw from '~/lib/tailwind';
import {useCurrentUserQuery} from '~/generated/graphql';
import Font from '~/components/ui/Font';

const ProfileScreen = () => {
  const onLogout = () => {
    auth().signOut();
  };

  const {data: currentUser} = useCurrentUserQuery();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={tw`pb-10`}
        showsVerticalScrollIndicator={false}
        style={tw`flex-1`}>
        <ProfileSection
          name={currentUser?.me.name || 'Loading...'}
          thoughts={100}
          followers={100}
          following={100}
          profileImage="https://picsum.photos/200"
          bio="Just another guy"
        />
        <Font>ProfileScreen</Font>
        <Pressable onPress={onLogout}>
          <Font>Logout</Font>
        </Pressable>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
