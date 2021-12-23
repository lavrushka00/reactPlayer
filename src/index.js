import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App2 from './App2'

import { Provider } from 'react-redux';

import store from "./components/redux/reduxStore"


ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,

    

  document.getElementById('root')
);


