import api from '../../utils/api';
import {
    GET_FLAYERS
} from '../action_types';

// GET Loyalties
export const getFlayers = (formData) => async dispatch => {
  try {
    const res = await api.get(`/flyers?pageSize=${formData.pageSize}&pageIndex=${formData.pageIndex}`);
    dispatch({
      type: GET_FLAYERS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
  }
};
  