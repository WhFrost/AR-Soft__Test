import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={`${globalStyles['container']} ${styles['footer__wrapper']}`}>
        Footer
      </div>
    </footer>
  );
}

export default Footer;
