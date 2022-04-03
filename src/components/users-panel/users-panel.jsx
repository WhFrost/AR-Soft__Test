/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './users-panel.module.scss';
import {nanoid} from 'nanoid';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUsers,
  selectCurrentUser,
  getCurrentUser,
  resetCurrentUser
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';
import Button from '../button/button';
import UserEditForm from '../user-edit-form/user-edit-form';

function UsersPanel () {
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [isEditionMode, setEditionMode] = useState(false);

  const editClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(getCurrentUser(Number(evt.target.id)));
    setEditionMode(true);
  };

  const submitUpdateUserHandler = () => {
    setEditionMode(false);
    dispatch(resetCurrentUser());
  };

  return (
    <section className={styles['users-panel']}>
      <div className={`${globalStyles['container']} ${styles['users-panel__wrapper']}`}>
        <ul className={`${globalStyles['list']} ${styles['users-panel__list']}`}>
          <li className={`${styles['users-panel__item']} ${styles['users-panel__item--titles']}`}>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Имя</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Фамилия</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>E-mail</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__olumn-title']}`}>Роль</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Организация</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Изображения</a>
          </li>
          {
            users.map((item, index) => {
              const {id, email, user, roles, organization} = item;

              return (
                <li key={nanoid()} className={styles['users-panel__item']}>
                  <span className={styles['users-panel__user-number']}>
                    {index + 1}
                  </span>
                  {
                    isEditionMode && currentUser.id === id
                      ?
                      <UserEditForm id={id} />
                      :
                      <>
                        <span className={styles['users-panel__user-number']}>
                          {user.name}
                        </span>
                        <span className={styles['users-panel__user-number']}>
                          {user.lastName}
                        </span>
                        <span className={styles['users-panel__user-number']}>
                          {email}
                        </span>
                        <span className={styles['users-panel__user-number']}>
                          {
                            roles.some((role) => role.name === 'ROLE_ADMIN')
                              ? USER_ROLE_TRANSLATE['ROLE_ADMIN']
                              : USER_ROLE_TRANSLATE['ROLE_USER']
                          }
                        </span>
                      </>
                  }
                  <span>
                    {organization.companyTitle}
                  </span>

                  {
                    isEditionMode && currentUser.id === id
                      ?
                      <div className={styles['users-panel__update-wrapper']}>
                        <Button
                          text='Обновить'
                          onClick={submitUpdateUserHandler}
                        />
                      </div>
                      :
                      <>
                        <Button
                          text='Скачать пользователя'
                          modificator='download'
                          isVisuallyText={false}
                          id={id}
                          onClick={() => {}}
                        />
                        <div>
                          <Button
                            text='Редактировать пользователя'
                            modificator='edit'
                            isVisuallyText={false}
                            id={id}
                            onClick={editClickHandler}
                          />
                          <Button
                            text='Удалить пользователя'
                            modificator='delete'
                            isVisuallyText={false}
                            id={id}
                            onClick={() => {}}
                          />
                        </div>
                      </>
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
}

export default UsersPanel;
