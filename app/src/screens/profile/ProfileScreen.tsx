import React from 'react';
import {ScrollView, View} from 'react-native';
import Container from '~/components/ui/Container';
import ProfileSection from '~/components/ProfileSection';
import tw from '~/lib/tailwind';
import {useCurrentUserQuery} from '~/generated/graphql';
import {useCurrentUserPostsQuery} from '~/generated/graphql';
import PostCard from '~/components/PostCard';
import Font from '~/components/ui/Font';

const ProfileScreen = () => {
  const {data: currentUser} = useCurrentUserQuery();
  const {data: currentUserPosts} = useCurrentUserPostsQuery();

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
        <View style={tw`mt-3`} />
        <Font className="text-base font-bold">Thoughts</Font>
        {currentUser &&
          currentUserPosts?.posts.map(post => (
            <PostCard
              key={post.id}
              content={post.content}
              user={currentUser?.me}
            />
          ))}
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;
