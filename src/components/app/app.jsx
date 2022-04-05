import React from 'react';
import globalStyles from './app.module.scss';
import {useSelector} from 'react-redux';
import {
  selectIsShowConfirmDeletePopup,
  selectIsShowAddUserPopup
} from '../../store/userSlice';
import Header from '../header/header';
import UsersList from '../users-panel/users-panel';
import ConfirmDeletePopup from '../confirm-delete-popup/confirm-delete-popup';
import AddUserPopup from '../add-user-popup/add-user-popup';
import Footer from '../footer/footer';

function App() {
  const isShowConfirmDeletePopup = useSelector(selectIsShowConfirmDeletePopup);
  const isShowAddUserPopup = useSelector(selectIsShowAddUserPopup);

  return (
    <>
      <Header />
      <main className={globalStyles['main']}>
        <h1 className={globalStyles['visually-hidden']}>
          Страница управления пользователями
        </h1>
        <UsersList />
        {
          isShowConfirmDeletePopup && <ConfirmDeletePopup />
        }
        {
          isShowAddUserPopup && <AddUserPopup />
        }
      </main>
      <Footer />
    </>
  );
}

export default App;
