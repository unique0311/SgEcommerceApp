import axios from 'axios';
// https://stage-v2.cloud.scannget.com
// https://d29yygyj0r81tw.cloudfront.net
const api = axios.create({
  baseURL: 'https://stage-v2.cloud.scannget.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      // store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
