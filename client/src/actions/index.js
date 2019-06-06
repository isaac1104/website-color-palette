import axios from 'axios';
import {
  FETCH_COLORS_DATA_REQUEST,
  FETCH_COLORS_DATA_SUCCESS,
  FETCH_COLORS_DATA_FAIL,
  SELECT_BACKGROUND_COLOR,
  SELECT_TEXT_COLOR,
  SELECT_BUTTON_COLOR
} from './types';

const fetchColorsDataRequest = () => ({
  type: FETCH_COLORS_DATA_REQUEST,
  payload: true
});

const fetchColorsDataSuccess = data => ({
  type: FETCH_COLORS_DATA_SUCCESS,
  payload: data
});

const fetchColorsDataFail = error => ({
  type: FETCH_COLORS_DATA_FAIL,
  payload: error
});

export const fetchColorsData = () => async dispatch => {
  dispatch(fetchColorsDataRequest());
  try {
    const request = await axios.get('/api/colors');
    const { data } = request;
    dispatch(fetchColorsDataSuccess(data));
  } catch (error) {
    dispatch(fetchColorsDataFail(error));
  }
};

export const selectBackgroundColor = hex => ({
  type: SELECT_BACKGROUND_COLOR,
  payload: hex
});

export const selectTextColor = hex => ({
  type: SELECT_TEXT_COLOR,
  payload: hex
});

export const selectButtonColor = hex => ({
  type: SELECT_BUTTON_COLOR,
  payload: hex
});
