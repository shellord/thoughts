import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ActivityFeed: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
