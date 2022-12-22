import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import Navigation from '~/navigators/Navigation';
import '~/lib/init';
import {client} from '~/lib/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
