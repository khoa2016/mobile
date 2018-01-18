import {
  FETCHING_NEW_LISTINGS,
  FETCHING_NEW_LISTINGS_SUCCESS,
  FETCHING_NEW_LISTINGS_FAILURE
} from '../constants';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
};


export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCHING_NEW_LISTINGS:
      return {
        ...state,
        data: [...state.data],
        isFetching: true
      }
    case FETCHING_NEW_LISTINGS_SUCCESS:
      console.debug(`In reducers.newListings: # items (${payload.length}), state = `);
      console.debug(state);
      // return {
      //   ...state,
      //   isFetching: false,
      //   data: payload
      // };
      return Object.assign({}, state, {isFetching: false, data: [...state.data, ...payload]});
    case FETCHING_NEW_LISTINGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
