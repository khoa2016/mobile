import {
  FETCHING_NEW_LISTINGS,
  FETCHING_NEW_LISTINGS_FAILURE,
  FETCHING_NEW_LISTINGS_SUCCESS
} from '../constants';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import getNewListings from '../api/newListings';

function* fetchData(action) {
  try {
    // const response = yield getNewListings();
    const [response] = yield all([
      call(fetch, 'http://10.0.10.154:3000/homes', { method: 'GET' })
    ]);
    const [data] = yield all([
      call(response, 'json')
    ]);
    console.debug("In sagas.newListings: list of homes = ");
    console.debug(data);
    yield put({ type: FETCHING_NEW_LISTINGS_SUCCESS, payload: response._bodyInit });
  } catch (e) {
    console.debug("In sagas.newListings: error in getting new listings: error = ");
    console.debug(e);
    yield put({ type: FETCHING_NEW_LISTINGS_FAILURE });
  }
}

function* newListingsSaga() {
  yield takeEvery(FETCHING_NEW_LISTINGS, fetchData);
}

function *rootSaga() {
  yield all([
    newListingsSaga(),
  ]);
}

export default rootSaga;
