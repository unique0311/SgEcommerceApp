import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setAuthToken = async (token) => {
  if (token) {
    // api.defaults.headers.common['x-auth-token'] = token;
    api.defaults.headers.common['Authorization'] = token;
    await AsyncStorage.setItem('token', token);
    console.log("------------Authorization created----------------");
  } else {
    delete api.defaults.headers.common['Authorization'];
    await AsyncStorage.removeItem('token');
  }
};

export default setAuthToken;
