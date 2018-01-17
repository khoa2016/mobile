import {
  FETCHING_NEW_LISTINGS,
  FETCHING_NEW_LISTINGS_FAILURE,
  FETCHING_NEW_LISTINGS_SUCCESS
} from '../constants';
import { call, put, takeEvery } from 'redux-saga/effects';

import getNewListings from '../api/newListings';

function* fetchData(action) {
  try {
    const response = yield getNewListings();
    // const response = yield call(fetch, 'http://localhost:3000/homes', { method: 'GET'});
    // const results = response.json();
    console.debug("In sagas.newListings: list of homes = ");
    console.debug(response);
    yield put({ type: FETCHING_NEW_LISTINGS_SUCCESS, payload: PaymentResponse });
  } catch (e) {
    yield put({ type: FETCHING_NEW_LISTINGS_FAILURE });
  }
}

function* newListingsSaga() {
  // yield takeEvery('FETCH_ENTITIES', fetchEntitiesSaga('Property', 'listHomes'));
  yield takeEvery(FETCHING_NEW_LISTINGS, fetchData);
}

function *rootSaga() {
  yield [
    newListingsSaga(),
  ]
}

export default rootSaga;
