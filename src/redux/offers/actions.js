import api from '../../utils/api';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import {
    GET_OFFERS,
    GET_OFFER
} from '../action_types';

// GET Offers
export const getOffers = (formData) => async dispatch => {
  try {
    const res = await api.get(`/shop/offers?pageSize=${formData.pageSize}&pageIndex=${formData.pageIndex}`);
    dispatch({
      type: GET_OFFERS,
      payload: res.data.data.list
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

// Get Offer
export const getOffer = (formData) => async dispatch => {
    try {
      // console.log("THis is API Header: ", api.defaults.headers);
      const res = await api.get(`shop/offers/${formData.offerId}`);
      if(res.data.status) {
        dispatch({
          type: GET_OFFER,
          payload: res.data.data
        });
      }
    } catch (err) {
      // Toast.show({
      //   type: ALERT_TYPE.WARNING,
      //   title: 'Warning',
      //   textBody: "Something went wrong",
      // })
      console.log(err);
    }
  };
  