import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ActivityFeed: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
