import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from '~/lib/tailwind';
import {BlurView} from '@react-native-community/blur';
import Font from './ui/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ProfileStackNavigationProp} from '~/navigators/types';

type Props = {
  name: string;
  thoughts: number;
  followers: number;
  following: number;
  profileImage?: string;
  bio?: string;
};

type ItemCountProps = {count: number; label: string};

const ItemCount: React.FC<ItemCountProps> = ({count, label}) => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`text-white text-xs`}>{label}</Text>
      <Text style={tw`text-white text-sm font-bold`}>{count}</Text>
    </View>
  );
};

const ProfileSection: React.FC<Props> = ({
  name,
  thoughts,
  followers,
  following,
  profileImage,
  bio,
}) => {
  const navigation =
    useNavigation<ProfileStackNavigationProp<'Profile'>['navigation']>();

  return (
    <View style={tw`rounded-2xl overflow-hidden`}>
      <BlurView blurType="dark" blurAmount={50} style={tw`absolute inset-0`} />
      <LinearGradient colors={['#3f3e3f57', '#2b282a']} style={tw`p-4`}>
        <View style={tw`flex-row justify-center`}>
          <View style={tw`items-center `}>
            <Image
              source={{uri: profileImage}}
              style={tw`w-20 h-20 rounded-full`}
            />
            <Font className={'text-white text-lg mt-2 font-bold'}>{name}</Font>
            <Font>{bio}</Font>
          </View>
          <TouchableOpacity
            style={tw`items-end absolute right-0`}
            onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="ios-settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
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
