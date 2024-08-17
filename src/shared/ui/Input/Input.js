import React from 'react';
import styles from './Input.module.scss';

const Input = ({ placeholder, type, onChange, value }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;