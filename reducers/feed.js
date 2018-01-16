import { FEED } from '../actions/feed';

const INITIAL_STATE = {
  selectedIdx: 0,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case FEED: {
      return {
        ...state,
        selectedIdx: 1,
      }
    }
    default:
      return state;
  }
};
