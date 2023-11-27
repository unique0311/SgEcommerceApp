import api from '../../utils/api';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    SAVE_SIGNUPEMAIL_STEP_1,
    LOAD_TOKEN
} from '../action_types';

// Login User
export const login = formData => async dispatch => {

  try {
    const res = await api.post('/auth/signin', formData);

    console.log(res.data);
    if (res.data.status) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data
      });
      console.log(res.data.data.apiToken);
      await AsyncStorage.setItem('token', res.data.data.apiToken);
      dispatch(loadToken());
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Login success',
      });
      return true;
    } else {
      console.log(res.data.errorCode);
      var errorMessage = '';
      switch(res.data.errorCode) {
        case 'Error_InvalidRequest':
          errorMessage = "Error_InvalidRequest";
          break;
        case 'Error_UserNotFound':
          errorMessage = "User not found";
          break;
        case 'Error_IncorrectPassword':
          errorMessage = "Incorrect password";
          break;
        case 'Error_EmailNotVerified':
          errorMessage = "Email not verified";
          break;
        case 'Error_PhoneNotVerified':
          errorMessage = "Phone not verified";
          break;
        case 'Error_InactiveUser':
          errorMessage = "Inactive user";
          break;
        case 'Error_ClosedUser':
          errorMessage = "Closed user";
          break;
        case 'Error_BlockedUser':
          errorMessage = "Blocked user";
          break;
      }
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: errorMessage,
      });
      return false;
    }

  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
      textBody: "Something went wrong",
    })
    console.log(err);
    return false;
  }
};

// Register User
export const saveSignUpEmailStep1 = formData => async dispatch => {
  dispatch({
    type: SAVE_SIGNUPEMAIL_STEP_1,
    payload: formData
  });
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/auth/signup', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    console.log(res.data);
    // dispatch(loadToken());
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: "Registered",
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: "Something went wrong",
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
      textBody: "Something went wrong",
    })
    console.log(err);
    return false;
  }
};

// send code
export const sendCode = formData => async dispatch => {
  try {
    console.log("send email", formData);
    const res = await api.get(`/auth/sendCode?type=${formData.type}&value=${formData.value}`);
    console.log(res.data);
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success'
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning'
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
    })
    return false;
  }
};

// confirm code
export const confirmCodeAction = formData => async dispatch => {
  try {
    console.log("confirm code", formData);
    const res = await api.get(`/auth/sendCode?type=${formData.type}&code=${formData.code}&value=${formData.value}`);
    console.log(res.data);
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning'
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
    })
    return false;
  }
};

// send code
export const forgotPassword = formData => async dispatch => {
  console.log(formData);
  try {
    const res = await api.get(`/auth/forgotPassword?email=${formData.email}`);
    console.log(res.data);
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success'
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: "Something went wrong",
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
      textBody: "Something went wrong",
    })
    return false;
  }
};

export const confirmPasswordAction = formData => async dispatch => {
  try {
    const res = await api.post('/auth/confirmPasswordCode', formData);
    console.log(res.data);
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: "Correct confirm code",
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: "Not correct the confirm code",
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
      textBody: "Something went wrong",
    })
    return false;
  }
};

export const resetPasswordAction = formData => async dispatch => {
  console.log(formData);
  try {
    const res = await api.post('/auth/resetPassword', formData);
    console.log(res.data);
    if(res.data.status) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: "Password changed",
      })
      return true;
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: "Something went wrong",
      })
      return false;
    }
  } catch (err) {
    Toast.show({
      type: ALERT_TYPE.WARNING,
      title: 'Warning',
      textBody: "Something went wrong",
    })
    return false;
  }
};

//load token
export const loadToken = () => async dispatch => {
  try{
    const token = await AsyncStorage.getItem('token');
    // const isAuthenticated = await AsyncStorage.getItem('token') ? true : false;
    const isAuthenticated = true;
    console.log("---", token, isAuthenticated);
    
    dispatch({
      type:LOAD_TOKEN, 
      payload:{
        token:token,
        isAuthenticated:isAuthenticated
      }
    });

  } catch(err){
    console.log(err);
  }
}
export const logout = () => ({ type: LOGOUT });
  