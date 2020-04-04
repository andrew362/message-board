import { LOAD_MESSAGES, REMOVE_MESSAGES } from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError } from './errors';

export const loadMessages = messages => {
  return {
    type: LOAD_MESSAGES,
    messages
  };
};

export const remove = id => {
  return {
    type: REMOVE_MESSAGES,
    id
  };
};

export const removeMessage = (user, message_id) => {
  return dispatch => {
    return apiCall('delete', `/api/users/${user}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => dispatch(addError(err)));
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

export const postNewMessage = text => (dispatch, getState) => {
  const { currentUser } = getState();
  return apiCall('post', `/api/users/${currentUser.user.id}/messages`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err)));
};
