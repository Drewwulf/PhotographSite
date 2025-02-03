import React from 'react';
import { NavLink } from 'react-router-dom'; // Імпортуємо NavLink
import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';

const Navbar = () => {
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
        {/* Використовуємо NavLink для активних посилань */}
        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Gallery</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Profile</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Register</NavLink></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
