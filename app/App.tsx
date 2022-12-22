import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import Navigation from '~/navigators/Navigation';
import '~/lib/init';
import {client} from '~/lib/apollo';
import RootProvider from '~/context/RootContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </RootProvider>
    </ApolloProvider>
  );
};

export default App;
