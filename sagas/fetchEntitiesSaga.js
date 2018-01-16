import { call, put, select } from 'redux-saga/effects';
import {
  fetchEntitiesSuccess,
  fetchEntitiesError,
} from '../actions/newListings';

import * as api from '../api/ApolloProxy';

export default function fetchEntitiesSaga(entityName, apiAction) {
  return function* (action) {
    console.debug(`In fetchEntititesSaga: entityName (${entityName}), apiAction (${apiAction}), action = `);
    console.debug(action);
    try {
      console.debug(`In fetchEntitiesSaga: success = `);
      const batchIndex = 50;
      const result = yield call(
        api[apiAction],
        action.args,
        // {type: 'FETCH_HOMES'},
        Object.assign({}, action.searchParameters, { skip: 20 * batchIndex })
      )
      console.debug(`In fetchEntititesSaga: result = `);
      console.debug(result);
      yield put(fetchEntitiesSuccess(
        action.entityName,
        // result.data[apiAction],
        [],
        batchIndex
      ));
    }
    catch (e) {
      console.debug(`In fetchEntitiesSaga: error = `);
      console.debug(e);
      const batchIndex = 0;
      yield put(fetchEntitiesError(
        action.entityName,
        e.message,
        batchIndex
      ));
    }
  }
}