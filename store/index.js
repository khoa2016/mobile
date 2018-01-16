import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import createSagaMiddleware from 'redux-saga';
import newListingSaga from '../sagas/newListings';
import { apolloClient } from '../api/ApolloProxy';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware, apolloClient.middleware()));
  sagaMiddleware.run(newListingSaga);
  return store;
}
