import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://201.47.37.219:4000',
});

export default client;

// Tudo corno!!!!!!!!!!!!!!!!!!
