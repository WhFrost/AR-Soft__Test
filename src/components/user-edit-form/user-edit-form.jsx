import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import styles from './user-edit-form.module.scss';
import {useSelector} from 'react-redux';
import {
  selectUsers,
  selectUsersRoles,
  // selectCurrentUser,
  // getCurrentUser,
  // resetCurrentUser
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';

function UserEditForm(props) {
  const {id, index} = props;

  const users = useSelector(selectUsers);
  const availablesRoles = useSelector(selectUsersRoles);
  const currentUser = users.find((item) => item.id === id);
  const {email, roles, user, organization} = currentUser;

  const [currentUserName, setCurrentUserName] = useState(user.name);
  const [currentUserLastName, setCurrentUserLastName] = useState(user.lastName);
  const [currentUserEmail, setCurrentUserEmail] = useState(email);
  const [currentUserRoles, setCurrentUserRoles] = useState(roles);

  const onChangeNameHandler = (evt) => {
    setCurrentUserName(evt.target.value);
  };
  const onChangeLastNameHandler = (evt) => {
    setCurrentUserLastName(evt.target.value);
  };
  const onChangeEmailHandler = (evt) => {
    setCurrentUserEmail(evt.target.value);
  };
  const onChangeRoleslHandler = (evt) => {
    setCurrentUserRoles(evt.target.value);
  };

  return (
    <>
      <span className={styles['users-panel__user-number']}>
        {index + 1}
      </span>
      <input
        type="text"
        id={id}
        className={styles['users-panel__user-name']}
        value={currentUserName}
        onChange={onChangeNameHandler}
      />
      <input
        type="text"
        id={id}
        className={styles['users-panel__user-lastname']}
        value={currentUserLastName}
        onChange={onChangeLastNameHandler}
      />
      <input
        type="email"
        id={id}
        className={styles['users-panel__user-email']}
        value={currentUserEmail}
        onChange={onChangeEmailHandler}
      />
      <select
        type="select"
        id={id}
        className={styles['users-panel__user-organizations']}
        value={
          currentUserRoles.some((role) => role.name === 'ROLE_ADMIN')
            ? USER_ROLE_TRANSLATE['ROLE_ADMIN']
            : USER_ROLE_TRANSLATE['ROLE_USER']
        }
        onChange={onChangeRoleslHandler}
      >
        {
          availablesRoles.map((role) => (
            <option key={nanoid()} value={role.value}>{USER_ROLE_TRANSLATE[role.value]}</option>
          ))
        }
      </select>
      <span>
        {organization.companyTitle}
      </span>
    </>
  );
}

UserEditForm.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number
};

export default UserEditForm;
