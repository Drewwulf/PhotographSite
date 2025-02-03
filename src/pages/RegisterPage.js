import React, { useState } from 'react';
import { registerUser } from '../services/authService';  // Імпортуємо функцію для реєстрації
import styles from '../styles/Page.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');  // Стейт для збереження email
  const [password, setPassword] = useState('');  // Стейт для збереження пароля
  const [error, setError] = useState(null);  // Стейт для збереження помилок

  const handleRegister = async (e) => {
    e.preventDefault();  // Запобігаємо перезавантаженню сторінки
    try {
      await registerUser(email, password);  // Викликаємо функцію для реєстрації
      window.location.href = '/login';  // Перенаправляємо на сторінку логіну після успішної реєстрації
    } catch (error) {
      setError(error.message);  // Виводимо помилку, якщо вона виникла
    }
  };

  return (
    <div className={styles.page}>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Показуємо помилки, якщо вони є */}
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
