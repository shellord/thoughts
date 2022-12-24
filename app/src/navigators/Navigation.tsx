import React from 'react';
import RootStack from './RootStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import {useCurrentUserQuery} from '~/generated/graphql';
import {useNavigation} from '@react-navigation/native';
import {useRootContext} from '~/context/RootContext';

const Navigation = () => {
  const [isAuthReady, setIsAuthReady] = React.useState(false);

  const {isLoggedIn, setIsLoggedIn} = useRootContext();
  const navigation = useNavigation();

  const {data: currentUser, loading} = useCurrentUserQuery({
    skip: !isAuthReady,
    fetchPolicy: 'no-cache',
  });

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setIsAuthReady(true);
        if (currentUser?.me.id) {
          return setIsLoggedIn(true);
        }
        if (!loading) {
          //@ts-ignore
          navigation.navigate('Register');
        }
        return;
      }
      setIsLoggedIn(false);
      setIsAuthReady(false);
    });
    return subscriber;
  }, [currentUser, navigation, setIsLoggedIn, loading, isAuthReady]);

  if (loading) {
    return null;
  }

  if (isLoggedIn) {
    return <RootStack />;
  }
  return <AuthStack />;
};

export default Navigation;
