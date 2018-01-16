import { FETCHING_NEW_LISTINGS } from '../constants';

export function fetchNewListings() {
  return {
    type: FETCHING_NEW_LISTINGS
  }
}
