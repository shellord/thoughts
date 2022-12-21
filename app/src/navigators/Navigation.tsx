import React from 'react';
import RootStack from './RootStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return subscriber;
  }, []);

  if (isLoggedIn) {
    return <RootStack />;
  }
  return <AuthStack />;
};

export default Navigation;
