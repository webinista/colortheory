import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import dataSource from './reducers';

import App from './containers/App.jsx';

import './css/normalize.min.css';
import './css/style.css';

const store = createStore( dataSource );

const init = () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById( 'app' )
  );
};

init();
