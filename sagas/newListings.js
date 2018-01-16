import {
  FETCHING_NEW_LISTINGS,
  FETCHING_NEW_LISTINGS_FAILURE,
  FETCHING_NEW_LISTINGS_SUCCESS
} from '../constants';
import { put, takeEvery } from 'redux-saga/effects';

import getNewListings from '../api/newListings';
import fetchEntitiesSaga from './fetchEntitiesSaga';

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
  // yield takeEvery('FETCH_ENTITIES', fetchEntitiesSaga('Property', 'listHomes'));
  yield takeEvery(FETCHING_NEW_LISTINGS, fetchData);
}

function *entitiesNewListingsSaga() {
  yield takeEvery(FETCHING_NEW_LISTINGS, fetchEntitiesSaga('Property', 'listHomes'));
}

export default entitiesNewListingsSaga;
