import React from 'react';
import {useSelector} from 'react-redux';

function UsersList () {
  const data = useSelector(state => state.user.data);
  const organizations = useSelector(state => state.user.organizations);

  return (
    <ul>
      <li>{data}</li>
      <li>{organizations}</li>
    </ul>
  );
}

export default UsersList;
