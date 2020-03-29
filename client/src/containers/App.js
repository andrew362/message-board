import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {BrowserRouter as Router} from 'react-router-dom';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        Hello!
      </div>
    </Router>
  </Provider>
);

export default App;
