import {
  FETCHING_NEW_LISTINGS,
  FETCHING_NEW_LISTINGS_FAILURE,
  FETCHING_NEW_LISTINGS_SUCCESS
} from '../constants';
import { put, takeEvery } from 'redux-saga/effects';

import getNewListings from '../api/newListings';

function* fetchData(action) {
  try {
    const homes = yield getNewListings();
    // console.debug("In newListingsSaga: homes = ");
    // console.debug(homes);
    yield put({ type: FETCHING_NEW_LISTINGS_SUCCESS, payload: homes });
  } catch (e) {
    yield put({ type: FETCHING_NEW_LISTINGS_FAILURE });
  }
}

function* newListingsSaga() {
  yield takeEvery(FETCHING_NEW_LISTINGS, fetchData);
}

export default newListingsSaga;
