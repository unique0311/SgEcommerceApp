import api from '../../utils/api';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    GET_CATEGORIES
} from '../action_types';

// GET Categories
export const getCategories = () => async dispatch => {
  try {
    const res = await api.get('/shop/categories');
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.data
    });
  } catch (err) {
    // Toast.show({
    //   type: ALERT_TYPE.WARNING,
    //   title: 'Warning',
    //   textBody: "Something went wrong",
    // })
    console.log(err);
  }
};
  