import React, { useState } from 'react';
import { loginUser } from '../services/authService'; // Імпортуємо функцію для логіну
import styles from '../styles/Page.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');  // Стейт для збереження email
  const [password, setPassword] = useState('');  // Стейт для збереження пароля
  const [error, setError] = useState(null);  // Стейт для збереження помилок

  const handleLogin = async (e) => {
    e.preventDefault();  // Запобігаємо перезавантаженню сторінки
    try {
      await loginUser(email, password);  // Викликаємо функцію для логіну
      // Перенаправляємо користувача, якщо авторизація успішна
      window.location.href = '/profile';  // або використовуйте useNavigate, якщо використовується React Router
    } catch (error) {
      setError(error.message);  // Виводимо помилку
    }
  };

  return (
    <div className={styles.page}>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
