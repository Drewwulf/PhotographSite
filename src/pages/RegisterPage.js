import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import styles from '../styles/Page.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password); // Викликаємо функцію register з хука
  };

  return (
    <div className={styles.page}>
      <h1>Register Page</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
