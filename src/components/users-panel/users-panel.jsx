/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './users-panel.module.scss';
import {nanoid} from 'nanoid';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectUsers,
  setEditableUserId,
  confirmDeletePopup,
  selectEditableUserId,
  selectEditionMode,
  showAddUserPopup,
  closeAllPopups
} from '../../store/userSlice';
import {USER_ROLE_TRANSLATE} from '../../const';
import Button from '../button/button';
import UserEditForm from '../user-edit-form/user-edit-form';

function UsersPanel () {
  const users = useSelector(selectUsers);
  const editableUserId = useSelector(selectEditableUserId);
  const isEditionMode = useSelector(selectEditionMode);
  const dispatch = useDispatch();

  const onEditClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(setEditableUserId(Number(evt.target.id)));
  };
  const onDeleteClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(confirmDeletePopup(Number(evt.target.id)));
  };
  const onAddUserClickHandler = () => {
    dispatch(showAddUserPopup(true));
  };

  useEffect(() => {
    const onPressEsc = (evt) => {
      if (evt.key === 'esc' || evt.key === 'Escape') {
        dispatch(closeAllPopups());
      }
    };
    window.addEventListener('keydown', onPressEsc);
    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  });

  return (
    <section className={styles['users-panel']}>
      <div className={`${globalStyles['container']} ${styles['users-panel__wrapper']}`}>
        <ul className={`${globalStyles['list']} ${styles['users-panel__list']}`}>
          <li className={`${styles['users-panel__item']} ${styles['users-panel__item--titles']}`}>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Имя</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Фамилия</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>E-mail</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Роль</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Организация</a>
            <a href='#' className={`${globalStyles['link']} ${styles['users-panel__column-title']}`}>Изображения</a>
          </li>
          {
            users.map((item, index) => {
              const {id, email, user, role, organization} = item;

              return (
                <li key={nanoid()} className={styles['users-panel__item']}>

                  {
                    isEditionMode && editableUserId === id
                      ?
                      <UserEditForm id={id} index={index} />
                      :
                      <>
                        <p className={styles['users-panel__user-content']}>
                          {index + 1}
                        </p>
                        <p className={styles['users-panel__user-content']}>
                          {user.name}
                        </p>
                        <p className={styles['users-panel__user-content']}>
                          {user.lastName}
                        </p>
                        <p className={styles['users-panel__user-content']}>
                          {email}
                        </p>
                        <p className={styles['users-panel__user-content']}>
                          {USER_ROLE_TRANSLATE[role.name]}
                        </p>
                        <p className={styles['users-panel__user-content']}>
                          {organization.companyTitle}
                        </p>
                        <div className={styles['users-panel__download-wrapper']}>
                          <Button
                            text='Скачать изображения пользователя'
                            modificator='download'
                            isVisuallyText={false}
                            id={id}
                            onClick={() => {}}
                          />
                        </div>
                        <div className={styles['users-panel__edit-wrapper']}>
                          <Button
                            text='Редактировать пользователя'
                            modificator='edit'
                            isVisuallyText={false}
                            id={id}
                            onClick={onEditClickHandler}
                          />
                          <Button
                            text='Удалить пользователя'
                            modificator='delete'
                            isVisuallyText={false}
                            id={id}
                            onClick={onDeleteClickHandler}
                          />
                        </div>
                      </>
                  }
                </li>
              );
            })
          }
        </ul>
        <Button
          text={'Создать пользователя'}
          modificator={'add-user'}
          onClick={onAddUserClickHandler}
        />
      </div>
    </section>
  );
}

export default UsersPanel;
