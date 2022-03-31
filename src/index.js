import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {getToken, getOrganizations} from './store/userSlice';
import {USER} from './const';

store.dispatch(getToken(USER));
store.dispatch(getOrganizations());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
