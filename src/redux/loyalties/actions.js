import api from '../../utils/api';
import {
    GET_LOYALTIES
} from '../action_types';

// GET Loyalties
export const getLoyalties = () => async dispatch => {
  try {
    const res = await api.get('/shop/loyalty-schemes?device=mobile');
    dispatch({
      type: GET_LOYALTIES,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
  }
};
  