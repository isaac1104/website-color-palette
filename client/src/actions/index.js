import axios from 'axios';
import { FETCH_COLORS_DATA_REQUEST, FETCH_COLORS_DATA_SUCCESS, FETCH_COLORS_DATA_FAIL } from './types';

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
