import React from 'react';
import styles from '../styles/Page.module.css';

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <h1>Login Page</h1>
      <button className={styles.button}>Login</button>
    </div>
  );
};

export default LoginPage;