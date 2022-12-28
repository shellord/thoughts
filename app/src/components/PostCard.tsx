import React from 'react';
import {View} from 'react-native';
import tw from '~/lib/tailwind';
import type {User} from '~/generated/graphql';
import Font from './ui/Font';

type Props = {
  content: string;
  user: User;
};

const PostCard: React.FC<Props> = ({content, user}) => {
  return (
    <View style={tw` p-2`}>
      <Font className="text-base font-bold">{user.name}</Font>
      <Font>{content}</Font>
    </View>
  );
};

export default PostCard;
