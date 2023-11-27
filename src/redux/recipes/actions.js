import api from '../../utils/api';
import {
    GET_RECIPES
} from '../action_types';

// Get Recipes
export const getRecipes = () => async dispatch => {
  try {
    const res = await api.get('/shop/loyalty-schemes/recipes/randomly');
    dispatch({
      type: GET_RECIPES,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
  }
};
  