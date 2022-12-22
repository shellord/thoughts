import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import auth from '@react-native-firebase/auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext(async (_, {headers}) => {
  const getIdToken = async () => {
    return await auth().currentUser?.getIdToken();
  };
  const token = await getIdToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
