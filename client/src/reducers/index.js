import { combineReducers } from 'redux';
import colorsReducer from './colors_reducer';

const rootReducer = combineReducers({
  colors: colorsReducer
});

export default rootReducer;
