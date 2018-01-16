import { combineReducers } from 'redux';
import newListings from './newListings';
import { apolloClient } from '../api/ApolloProxy';

export default combineReducers({
  newListings,
  apollo: apolloClient.reducer(),
});
