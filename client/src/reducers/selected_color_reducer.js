import { SELECT_BACKGROUND_COLOR, SELECT_TEXT_COLOR, SELECT_BUTTON_COLOR, SELECT_BUTTON_TEXT_COLOR } from '../actions/types';

const INITIAL_STATE = {
  background: '#ffffff',
  text: '#000000',
  button: '#ffffff',
  button_text: '#000000'
};

const selectedColorReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_BACKGROUND_COLOR:
      return {
        ...state,
        background: payload
      };
    case SELECT_TEXT_COLOR:
      return {
        ...state,
        text: payload
      };
    case SELECT_BUTTON_COLOR:
      return {
        ...state,
        button: payload
      };
    case SELECT_BUTTON_TEXT_COLOR:
      return {
        ...state,
        button_text: payload
      };
    default:
      return state;
  }
};

export default selectedColorReducer;
