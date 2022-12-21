import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '~/config/firebase';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});
