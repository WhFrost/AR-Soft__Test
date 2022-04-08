import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './add-user-popup.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUsers,
  selectUsersRoles,
  selectOrganizations,
  addUser,
  closeAllPopups
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';
import Button from '../button/button';

function AddUserPopup() {
  const users = useSelector(selectUsers);
  const availablesRoles = useSelector(selectUsersRoles);
  const availablesOrganizations = useSelector(selectOrganizations);

  const dispatch = useDispatch();

  const userId = users.length + 1;
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userOrganization, setUserOrganization] = useState('');
  const [userBirthday, setUserBirthday] = useState('');

  const [inputNameError, setInputNameError] = useState(false);
  const [inputLastNameError, setInputLastNameError] = useState(false);
  const [inputEmailError, setInputEmailError] = useState(false);
  const [inputPasswordError, setInputPasswordError] = useState(false);
  const [inputRoleError, setInputRoleError] = useState(false);
  const [inputOrganizanionError, setInputOrganizationError] = useState(false);
  const [inputBirthdayError, setInputBirthdayError] = useState(false);

  const errorNameInputClassName = inputNameError ? `${styles['add-user-popup__input--error']}` : '';
  const errorLastNameInputClassName = inputLastNameError ? `${styles['add-user-popup__input--error']}` : '';
  const errorEmailInputClassName = inputEmailError ? `${styles['add-user-popup__input--error']}` : '';
  const errorPasswordInputClassName = inputPasswordError ? `${styles['add-user-popup__input--error']}` : '';
  const errorRoleInputClassName = inputRoleError ? `${styles['add-user-popup__input--error']}` : '';
  const errorOrganizationInputClassName = inputOrganizanionError ? `${styles['add-user-popup__input--error']}` : '';
  const errorBirthdayInputClassName = inputBirthdayError ? `${styles['add-user-popup__input--error']}` : '';

  const onChangeNameHandler = (evt) => {
    setInputNameError(evt.target.value.length === 0);
    setUserName(evt.target.value);
  };
  const onChangeLastNameHandler = (evt) => {
    setInputLastNameError(evt.target.length === 0);
    setUserLastName(evt.target.value);
  };
  const onChangeEmailHandler = (evt) => {
    setInputEmailError(evt.target.value.length === 0);
    setUserEmail(evt.target.value);
  };
  const onChangePasswordHandler = (evt) => {
    setInputPasswordError(evt.target.value.length === 0);
    setUserPassword(evt.target.value);
  };
  const onChangeRoleHandler = (evt) => {
    setInputRoleError(evt.target.value === '');
    setUserRole(evt.target.value);
  };
  const onChangeOrganizationHandler = (evt) => {
    setInputOrganizationError(evt.target.value === '');
    setUserOrganization(evt.target.value);
  };
  const onChangeBirthdayHandler = (evt) => {
    setInputBirthdayError(evt.target.value.length === 0);
    setUserBirthday(evt.target.value);
  };
  const onCloseClickHandler = () => {
    dispatch(closeAllPopups());
  };

  const onSubmitClickHandler = () => {
    if (
      userName.length !== 0 &&
      userLastName.length !== 0 &&
      userEmail.length !== 0 &&
      userPassword.length !== 0 &&
      userRole !==0 &&
      userOrganization !== 0 &&
      userBirthday.length !== 0
    ) {
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
    setInputNameError(userName.length === 0);
    setInputLastNameError(userLastName.length === 0);
    setInputEmailError(userEmail.length === 0);
    setInputPasswordError(userPassword.length === 0);
    setInputRoleError(userRole === '');
    setInputOrganizationError(userOrganization === '');
    setInputBirthdayError(userBirthday.length === 0);
  };

  return (
    <section className={styles['add-user-popup']}>
      <div className={styles['add-user-popup__wrapper']}>
        <h3 className={`${globalStyles['title']} ${styles['add-user-popup__title']}`}>
          Создание пользователя
        </h3>
        <form onSubmit={onSubmitClickHandler}>
          <fieldset className={styles['add-user-popup__field-group']}>
            <label htmlFor="name" className={styles['add-user-popup__label']}>
            Имя:
            </label>
            <input
              type="text"
              id='name'
              className={`${styles['add-user-popup__input']} ${errorNameInputClassName}`}
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
              className={`${styles['add-user-popup__input']} ${errorLastNameInputClassName}`}
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
              className={`${styles['add-user-popup__input']} ${errorEmailInputClassName}`}
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
              className={`${styles['add-user-popup__input']} ${errorPasswordInputClassName}`}
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
              className={`${styles['add-user-popup__input']} ${errorRoleInputClassName}`}
              required
              onChange={onChangeRoleHandler}
            >
              <option
                disabled
                selected
                className={styles['add-user-popup__input--disabled']}
              >
                  Выберите роль
              </option>
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
              className={`${styles['add-user-popup__input']} ${errorOrganizationInputClassName}`}
              required
              onChange={onChangeOrganizationHandler}
            >
              <option
                disabled
                selected
                className={styles['add-user-popup__input--disabled']}
              >
                  Выберите организацию
              </option>
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
              className={`${styles['add-user-popup__input']} ${errorBirthdayInputClassName}`}
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
              type={'submit'}
              text={'Сохранить'}
              modificator={'close-popup'}
              onClick={onSubmitClickHandler}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddUserPopup;
