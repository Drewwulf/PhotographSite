import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';
import { auth } from '../config/firebase'; // Імпортуємо auth з firebase
import { signOut } from 'firebase/auth'; // Імпортуємо функцію для логауту
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate для перенаправлення

const Navbar = () => {
  const [user, setUser] = useState(null); // Стейт для збереження інформації про користувача
  const navigate = useNavigate(); // Для перенаправлення на інші сторінки

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Встановлюємо користувача в стейт
    });
    
    return () => unsubscribe(); // Очищаємо підписку при розмонтуванні компонента
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Викликаємо logout
      navigate('/'); // Перенаправляємо на головну сторінку після логауту
    } catch (error) {
      console.error('Error during logout: ', error.message);
    }
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.logo}>
        <h2>Photographer</h2>
      </div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Gallery</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Profile</NavLink></li>

        {user ? (
          <li>
          <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>

           {/* Кнопка logout, якщо користувач увійшов */}
          </li>
        ) : (
          <>
            <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Login</NavLink></li>
            <li><NavLink to="/register" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Register</NavLink></li>
          </>
        )}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
