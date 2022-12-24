import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import auth from '@react-native-firebase/auth';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.2:4000/',
});

const authLink = setContext(async (_, {headers}) => {
  const getIdToken = async () => {
    return await auth().currentUser?.getIdToken();
  };
  const token = await getIdToken();
  console.log(token);
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
