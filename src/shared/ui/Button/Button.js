import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, type }) => {
return (
<button className={styles.button} onClick={onClick} type={type}>
{children}
</button>
);
};

export default Button;