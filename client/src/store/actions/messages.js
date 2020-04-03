import { LOAD_MESSAGES } from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError } from './errors';

export const loadMessages = messages => {
  return {
    type: LOAD_MESSAGES,
    messages
  };
};

export const fetchMessages = () => {
  return dispatch => {
    return apiCall('get', '/api/messages')
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.messages));
      });
  };
};
