import { ApolloClient, createNetworkInterface } from 'react-apollo';
import gql from 'graphql-tag';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3000/graphql' })
export const apolloClient = new ApolloClient({
  networkInterface
});

export const listHomes = (args, search) => apolloClient.query({
  query: gql`
    query ListHomes($args: PropertyInput, $search: SearchParameters) {
      listHomes(args: $args, search: $search) {
        ... PropertyAttributes
      }
    }
  `,
  variables: {
    args,
    search
  }
});