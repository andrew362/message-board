import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setTokenHeader } from '../services/api';
import { setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';
import { fetchMessages } from '../store/actions/messages';

if (localStorage.jwtToken) {
  setTokenHeader(localStorage.jwtToken);

  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    store.dispatch(fetchMessages());
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
