import React from 'react';
import RootStack from './RootStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <RootStack />;
  }
  return <AuthStack />;
};

export default Navigation;
