import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from '~/lib/tailwind';
import {BlurView} from '@react-native-community/blur';
type Props = {
  name: string;
  thoughts: number;
  followers: number;
  following: number;
  profileImage?: string;
};

type ItemCountProps = {count: number; label: string};

const ItemCount: React.FC<ItemCountProps> = ({count, label}) => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`text-white text-sm`}>{label}</Text>
      <Text style={tw`text-white text-xl font-bold`}>{count}</Text>
    </View>
  );
};

const ProfileSection: React.FC<Props> = ({
  name,
  thoughts,
  followers,
  following,
  profileImage,
}) => {
  return (
    <View style={tw`rounded-2xl overflow-hidden`}>
      <BlurView blurType="light" blurAmount={50} style={tw`absolute inset-0`} />
      <LinearGradient colors={['#3f3e3f57', '#b44980']} style={tw`p-4`}>
        <View style={tw`items-center`}>
          <Image
            source={{uri: profileImage}}
            style={tw`w-20 h-20 rounded-full`}
          />
          <Text style={tw`text-white text-xl mt-2 font-bold`}>{name}</Text>
        </View>
        <View style={tw`mt-4`} />
        <View style={tw`flex-row justify-around`}>
          <ItemCount count={thoughts} label="Thoughts" />
          <ItemCount count={followers} label="Followers" />
          <ItemCount count={following} label="Following" />
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileSection;
