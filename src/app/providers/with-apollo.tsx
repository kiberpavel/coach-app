import React, { ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { GRAPHQL_API_URL } from '@env';
import { getStoredToken } from 'entities/session';

const httpLink = createHttpLink({
  uri: GRAPHQL_API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getStoredToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const withApollo = (component: () => ReactNode) => () => {
  // prettier-ignore
  return (
    <ApolloProvider client={client}>{component()}</ApolloProvider>
  );
};
