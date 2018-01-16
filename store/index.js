import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

// const store = createStore(reducers);
//
// export default store;

import createSagaMiddleware from 'redux-saga';
import newListingSaga from '../sagas/newListings';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(newListingSaga);
  return store;
}
