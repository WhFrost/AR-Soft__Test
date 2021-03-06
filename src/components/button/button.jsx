import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './button.module.scss';

function Button(props) {
  const {
    type = 'button',
    text,
    isVisuallyText = true,
    modificator,
    id = null,
    disabled = false,
    onClick
  } = props;
  return (
    <button
      type={type}
      className={`${styles['button']} ${styles[`button--${modificator}`]}`}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={isVisuallyText ? '' : globalStyles['visually-hidden']}>{text}</span>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  isVisuallyText: PropTypes.bool,
  modificator: PropTypes.string,
  id: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
