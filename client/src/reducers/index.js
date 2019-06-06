import { combineReducers } from 'redux';
import colorsReducer from './colors_reducer';
import selectedColorReducer from './selected_color_reducer';

const rootReducer = combineReducers({
  colors: colorsReducer,
  selected_color: selectedColorReducer
});

export default rootReducer;
