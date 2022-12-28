import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  ActivityFeed: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type ProfileStackNavigationProp<T extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, T>;

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
