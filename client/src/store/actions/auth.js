import { SET_CURRENT_USER } from '../actionTypes';
import {apiCall, setTokenHeader} from '../../services/api';
import { addError, removeError } from './errors';
import { fetchMessages } from './messages';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    setTokenHeader(false);
    dispatch(setCurrentUser({}));
  }
};

export const authUser = (type, userData) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          setTokenHeader(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          dispatch(fetchMessages());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err.message));
          return reject();
        });
    });
 };
};
