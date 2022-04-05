import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './add-user-popup.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUsersRoles,
  selectOrganizations,
  addUser,
  closeAllPopups
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';
import Button from '../button/button';

function AddUserPopup() {
  const availablesRoles = useSelector(selectUsersRoles);
  const availablesOrganizations = useSelector(selectOrganizations);

  const dispatch = useDispatch();

  const userId = nanoid();
  const [userName, setUserName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userRole, setUserRole] = useState('default');
  const [userOrganization, setUserOrganization] = useState('default');
  const [userBirthday, setUserBirthday] = useState(null);

  const [inputError, setInputError] = useState(false);

  const errorClassName = inputError ? 'input-error' : '';

  const onChangeNameHandler = (evt) => {
    setUserName(evt.target.value);
  };
  const onChangeLastNameHandler = (evt) => {
    setUserLastName(evt.target.value);
  };
  const onChangeEmailHandler = (evt) => {
    setUserEmail(evt.target.value);
  };
  const onChangePasswordHandler = (evt) => {
    setUserPassword(evt.target.value);
  };
  const onChangeRoleHandler = (evt) => {
    setUserRole(evt.target.value);
  };
  const onChangeOrganizationHandler = (evt) => {
    setUserOrganization(evt.target.value);
  };
  const onChangeBirthdayHandler = (evt) => {
    setUserBirthday(evt.target.value);
  };
  const onCloseClickHandler = () => {
    dispatch(closeAllPopups());
  };
  const onSubmitClickHandler = () => {
    setInputError(!userName);
    if (userName!== null) {
      const newUser = {
        id: userId,
        email: userEmail,
        active: true,
        user: {
          id: userId,
          name: userName,
          lastName: userLastName,
          password: userPassword,
          birthday: userBirthday
        },
        role: {
          name: userRole
        },
        organization: {
          companyTitle: userOrganization,
          isBlocked: false,
          blocked: false
        }
      };
      dispatch(addUser(newUser));
    }
  };

  return (
    <section className={styles['add-user-popup']}>
      <div className={styles['add-user-popup__wrapper']}>
        <h3 className={`${globalStyles['title']} ${styles['add-user-popup__title']}`}>
          Создание пользователя
        </h3>
        <section>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="name" className={styles['add-user-popup__label']}>
            Имя:
            </label>
            <input
              type="text"
              id='name'
              className={`${styles['add-user-popup__input']}`}
              autoFocus
              placeholder='Введите имя'
              required
              onChange={onChangeNameHandler}
            />
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="lastname" className={styles['add-user-popup__label']}>
            Фамилия:
            </label>
            <input
              type="text"
              id='lastname'
              className={styles['add-user-popup__input']}
              placeholder='Введите фамилию'
              required
              onChange={onChangeLastNameHandler}
            />
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="email" className={styles['add-user-popup__label']}>
            E-mail:
            </label>
            <input
              type="email"
              id='email'
              className={styles['add-user-popup__input']}
              placeholder='Введите e-mail'
              required
              onChange={onChangeEmailHandler}
            />
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="password" className={styles['add-user-popup__label']}>
            Пароль:
            </label>
            <input
              type="password"
              id='password'
              className={styles['add-user-popup__input']}
              placeholder='Введите пароль'
              required
              onChange={onChangePasswordHandler}
            />
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="role" className={styles['add-user-popup__label']}>
            Роль:
            </label>
            <select
              id='role'
              className={styles['add-user-popup__input']}
              value={userRole}
              required
              onChange={onChangeRoleHandler}
            >
              <option value={'default'} disabled>Выберите роль</option>
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
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="organizations" className={styles['add-user-popup__label']}>
            Организация:
            </label>
            <select
              id='organizations'
              className={styles['add-user-popup__input']}
              value={userOrganization}
              required
              onChange={onChangeOrganizationHandler}
            >
              <option value={'default'} disabled>Выберите организацию</option>
              {
                availablesOrganizations.map((item) => (
                  <option
                    key={nanoid()}
                    value={item.companyTitle}
                  >
                    {item.companyTitle}
                  </option>
                ))
              }
            </select>
          </fieldset>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="birthday" className={styles['add-user-popup__label']}>
            Дата рождения:
            </label>
            <input
              type="date"
              id='birthday'
              className={styles['add-user-popup__input']}
              required
              onChange={onChangeBirthdayHandler}
            />
          </fieldset>
          <div className={styles['add-user-popup__buttons']}>
            <Button
              text={'Закрыть'}
              modificator={'close-popup'}
              onClick={onCloseClickHandler}
            />
            <Button
              text={'Сохранить'}
              modificator={'close-popup'}
              onClick={onSubmitClickHandler}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default AddUserPopup;
