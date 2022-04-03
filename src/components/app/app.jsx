import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
import UsersList from '../users-panel/users-panel';
import Footer from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className={globalStyles['visually-hidden']}>
          Страница управления пользователями
        </h1>
        <UsersList />
      </main>
      <Footer />
    </>
  );
}

export default App;
