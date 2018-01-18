import { FETCHING_NEW_LISTINGS } from '../constants';

export function fetchNewListings(page = 6) {
  return {
    type: FETCHING_NEW_LISTINGS,
    payload: page
  }
}
