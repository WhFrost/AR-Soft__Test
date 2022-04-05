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
  const {email, role, user, organization} = currentUser;

  const dispatch = useDispatch();

  const [currentUserName, setCurrentUserName] = useState(user.name);
  const [currentUserLastName, setCurrentUserLastName] = useState(user.lastName);
  const [currentUserEmail, setCurrentUserEmail] = useState(email);
  const [currentUserRole, setCurrentUserRole] = useState(role.name);

  const onChangeNameHandler = (evt) => {
    setCurrentUserName(evt.target.value);
  };
  const onChangeLastNameHandler = (evt) => {
    setCurrentUserLastName(evt.target.value);
  };
  const onChangeEmailHandler = (evt) => {
    setCurrentUserEmail(evt.target.value);
  };
  const onChangeRolelHandler = (evt) => {
    setCurrentUserRole(evt.target.value);
  };
  const submitUpdateUserHandler = () => {
    dispatch(updateUser(
      {
        ...currentUser,
        email: currentUserEmail,
        user: {
          ...currentUser.user,
          name: currentUserName,
          lastName: currentUserLastName,
        },
        role: {
          name: currentUserRole
        }
      }
    ));
    dispatch(resetEditableUserId());
  };

  return (
    <>
      <p className={styles['user-edit-form__user-content']}>
        {index + 1}
      </p>
      <input
        type="text"
        id={id}
        className={`${styles['user-edit-form__input']} ${styles['user-edit-form__input--name']}`}
        autoFocus
        value={currentUserName}
        onChange={onChangeNameHandler}
      />
      <input
        type="text"
        id={id}
        className={`${styles['user-edit-form__input']} ${styles['user-edit-form__input--lastname']}`}
        value={currentUserLastName}
        onChange={onChangeLastNameHandler}
      />
      <input
        type="email"
        id={id}
        className={`${styles['user-edit-form__input']} ${styles['user-edit-form__input--email']}`}
        value={currentUserEmail}
        onChange={onChangeEmailHandler}
      />
      <select
        type="select"
        id={id}
        className={`${styles['user-edit-form__input']} ${styles['user-edit-form__input--role']}`}
        value={currentUserRole}
        onChange={onChangeRolelHandler}
      >
        {
          availablesRoles.map((item) => (
            <option
              key={nanoid()}
              value={item.value}
            >
              {USER_ROLE_TRANSLATE[item.value]}
            </option>
          ))
        }
      </select>
      <p>
        {organization.companyTitle}
      </p>
      <div className={styles['user-edit-form__update-wrapper']}>
        <Button
          text='Обновить'
          modificator={'update'}
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
