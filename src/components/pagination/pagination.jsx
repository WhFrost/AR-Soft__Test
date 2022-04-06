/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './pagination.module.scss';

function Pagination(props) {
  const {usersPerPage, totalUsers, paginate, currentPage} = props;

  const pagesCount = Math.ceil(totalUsers/usersPerPage);
  const pages = new Array(pagesCount).fill();

  return (
    <ul className={`${globalStyles['list']} ${styles['pagination__list']}`}>
      {
        pages.map((page, index) => (
          <li key={nanoid()} className={styles['pagination__item']}>
            <a
              href="#"
              className={`${globalStyles['link']} ${styles['pagination__link']} ${currentPage === index + 1 ? styles['pagination__link--active'] : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))
      }
    </ul>
  );
}
Pagination.propTypes = {
  usersPerPage: PropTypes.number,
  totalUsers: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Pagination;
