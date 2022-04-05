import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './button.module.scss';

function Button(props) {
  const {
    text,
    isVisuallyText = true,
    modificator,
    id = null,
    onClick
  } = props;
  return (
    <button
      className={`${styles['button']} ${styles[`button--${modificator}`]}`}
      id={id}
      onClick={onClick}
    >
      <span className={isVisuallyText ? '' : globalStyles['visually-hidden']}>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  isVisuallyText: PropTypes.bool,
  modificator: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
