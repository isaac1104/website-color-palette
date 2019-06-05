import { FETCH_COLORS_DATA_REQUEST, FETCH_COLORS_DATA_SUCCESS, FETCH_COLORS_DATA_FAIL } from '../actions/types';

const INITIAL_STATE = {
  is_fetching: false,
  data: [],
  errorMsg: null
};

const colorsReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_COLORS_DATA_REQUEST:
      return {
        ...state,
        is_fetching: payload
      };
    case FETCH_COLORS_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        data: payload,
        errorMsg: null
      };
    case FETCH_COLORS_DATA_FAIL:
      return {
        ...state,
        is_fetching: false,
        data: [],
        errorMsg: payload
      };
    default:
      return state;
  }
};

export default colorsReducer;
