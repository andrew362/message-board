import axios from 'axios';

export const apiCall = (method, path, data) => {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(response => {
        return resolve(response.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
};
