import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './confirm-delete-popup.module.scss';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectRemovableUserId,
  confirmDeletePopup,
  deleteUser,
} from '../../store/userSlice';
import Button from '../button/button';

function ConfirmDeletePopup() {
  const removableUserId = useSelector(selectRemovableUserId);

  const dispatch = useDispatch();
  const onCancelClickHandler = () => {
    dispatch(confirmDeletePopup(false));
  };
  const onConfirmClickHandler= () => {
    dispatch(deleteUser(removableUserId));
    dispatch(confirmDeletePopup(false));
  };

  return (
    <section className={styles['confirm-delete-popup']}>
      <div className={styles['confirm-delete-popup__wrapper']}>
        <h3 className={`${globalStyles['title']} ${styles['confirm-delete-popup__title']}`}>
          Вы действительно хотите удалить пользователя?
        </h3>
        <div className={styles['confirm-delete-popup__buttons']}>
          <Button
            text={'Нет'}
            onClick={onCancelClickHandler}
            modificator={'close-popup'}
          />
          <Button
            text={'Да'}
            onClick={onConfirmClickHandler}
            modificator={'close-popup'}
          />
        </div>
      </div>
    </section>
  );
}

export default ConfirmDeletePopup;
