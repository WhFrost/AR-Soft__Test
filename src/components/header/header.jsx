import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './header.module.scss';


function Header() {
  return (
    <header className={styles['header']}>
      <div className={`${globalStyles['container']} ${styles['header__wrapper']}`}>
        Header
      </div>
    </header>
  );
}

export default Header;
