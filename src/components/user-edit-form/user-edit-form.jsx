import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import styles from './user-edit-form.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUsers,
  selectUsersRoles,
  resetEditableUserId,
  updateUser
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';
import Button from '../button/button';

function UserEditForm(props) {
  const {id, index} = props;

  const users = useSelector(selectUsers);
  const availablesRoles = useSelector(selectUsersRoles);
  const currentUser = users.find((item) => item.id === id);
  const {email, roles, user, organization} = currentUser;

  const dispatch = useDispatch();


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

  const submitUpdateUserHandler = () => {
    // eslint-disable-next-line no-console
    console.log({
      ...currentUser,
      email: currentUserEmail,
      user: {
        name: currentUserName,
        lastName: currentUserLastName,
      }
    });
    dispatch(updateUser(
      {
        ...currentUser,
        email: currentUserEmail,
        user: {
          name: currentUserName,
          lastName: currentUserLastName,
        }
      }
    ));
    dispatch(resetEditableUserId());
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
      <div className={styles['users-panel__update-wrapper']}>
        <Button
          text='Обновить'
          onClick={submitUpdateUserHandler}
        />
      </div>
    </>
  );
}

UserEditForm.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number
};

export default UserEditForm;
