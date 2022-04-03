import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {
  getUsers,
  getOrganizations,
  getUsersRoles
} from './store/userSlice';
import {Users} from './mock/users';
import {Organizations} from './mock/organizations';
import {USER_ROLE} from './const';
import App from './components/app/app';

store.dispatch(getUsers(Users));
store.dispatch(getOrganizations(Organizations));
store.dispatch(getUsersRoles(USER_ROLE));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
